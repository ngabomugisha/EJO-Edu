import Subject from './repo'
import Response from '../../../utils/Responses';
import csvtojson from 'csvtojson'

import Topic from '../topic/repo'
import SubTopic from '../subtopic/repo'
import Unit from '../unit/repo'

exports.createFromCSV = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        console.log(name, req.files.subject[0])
        const file = req.files.subject[0].path

        let topic = -1
        let subtopic = -1
        let unit = -1
        const subject = {}
        subject.topics = []
        csvtojson()
            .fromFile(file)
            .then(async (rows) => {
                rows.map(row => {
                    if (row.field2 !== "") {
                        topic++
                        subtopic = -1
                        unit = -1
                        subject.topics.push({
                            name: row.field2,
                            subtopics: []
                        })
                    }
                    if (row.field3 !== "") {
                        subtopic++
                        unit = -1
                        subject.topics[topic].subtopics.push({
                            name: row.field3,
                            units: []
                        })
                    }
                    if (row.field4 !== "") {
                        unit++
                        subject.topics[topic].subtopics[subtopic].units.push({
                            name: row.field4,
                            content: {
                                knowledgeAndUnderstanding: [],
                                skills: [],
                                attitudesAndValues: []
                            },
                            activities: []
                        })
                    }
                    if (row.field5 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].numberOfPeriods = row.field5
                    }
                    if (row.field6 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].keyCompetency = row.field6
                    }
                    if (row.field7 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].content.knowledgeAndUnderstanding.push({
                            topic: row.field7
                        })
                    }
                    if (row.field8 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].content.skills.push({
                            topic: row.field8
                        })
                    }
                    if (row.field9 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].content.attitudesAndValues.push({
                            topic: row.field9
                        })
                    }
                    if (row.field10 !== "") {
                        subject.topics[topic].subtopics[subtopic].units[unit].activities.push({
                            activity: row.field10
                        })
                    }

                })

                subject.topics.shift();

                const createdSubject = await Subject.create(name);
                subject.topics.map(topic => {
                    Topic.create(topic.name, createdSubject._id)
                        .then(createdTopic => {
                            topic.subtopics.map(subtopic => {
                                SubTopic.create(subtopic.name, createdTopic._id)
                                    .then(createdSubtopic => {
                                        subtopic.units.map(unit => {
                                            Unit.create(unit.name, createdSubtopic._id,  createdTopic._id, unit.numberOfPeriods, unit.keyCompetency, unit.content, unit.activities)
                                                .then(createdUnit => {
                                                    console.log("unit created", createdUnit.name)
                                                })
                                                .catch(err => {
                                                    console.log(err)
                                                })
                                        })
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })

                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })

                })
                
                Response.Success(res, 200, "created successfully", subject);
            }).catch(err => {
                console.log("====>", err)
                return Response.validationError(res, "Bad formatted file please edit it and try again");

            })

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.create = async (req, res) => {
    try {
        const {
            name
        } = req.body;

        Subject.create(name)
            .then(results => {
                Response.Success(res, 200, "created successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.update = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        const {
            name
        } = req.body;
        Subject.update(subjectId, name)
            .then(results => {
                Response.Success(res, 200, "updated successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.getAllSubjects = async (req, res) => {
    try {

        Subject.getAllSubjects()
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}


exports.getOneSubject = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        Subject.getOneSubject(subjectId)
            .then(results => {
                Response.Success(res, 200, "queried successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}

exports.delete = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        Subject.delete(subjectId)
            .then(results => {
                Response.Success(res, 200, "deleted successfully", results);
            })
            .catch(err => {
                console.log(err);
                Response.InternalServerError(res, "We are having issues! please try again soon");
            });

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon");
    }

}