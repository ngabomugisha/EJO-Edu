const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school'
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'unit'
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject'
    },
    keyUnitCompetency: String,
    lessonNumber: Number,
    lessonName: String,
    knowledge: {
        topics: [
            {
                topic: String,
                bloomTaxonomy: String,
                selfCreated: Boolean,
                standardCriteriaPerfomance: Number,
                files: [{
                    fileType: String,
                    file: String
                }],
            }
        ],
        instructionalMaterial: [
            {
                materialType: String,
                items: [
                    {
                        item : String
                    }
                ],
                uploads: [
                    { file: String }
                ]
            }
        ],
        otherMaterialsAndReferences: String
    },
    skills: {
        topics: [
            {
                topic: String,
                bloomTaxonomy: String,
                selfCreated: Boolean,
                standardCriteriaPerfomance: Number,
                files: [{
                    fileType: String,
                    file: String
                }],
            }
        ],
        instructionalMaterial: [
            {
                materialType: String,
                items: [
                    {
                        item : String
                    }
                ],
                uploads: [
                    { file: String }
                ]
            }
        ],
        otherMaterialsAndReferences: String
    },
    attitudesAndValues: {
        topics: [
            {
                topic: String,
                bloomTaxonomy: String,
                selfCreated: Boolean,
                standardCriteriaPerfomance: Number,
                files: [{
                    fileType: String,
                    file: String
                }],
            }
        ],
        instructionalMaterial: [
            {
                materialType: String,
                items: [
                    {
                        item : String
                    }
                ],
                uploads: [
                    { file: String }
                ]
            }
        ],
        otherMaterialsAndReferences: String
    },
    activities: {
        introduction: {
            content: {
                activities: [
                    {
                        activity: String,
                        files: [{
                            fileType: String,
                            file: String
                        }],
                    }
                ],
                otherActivity: String
            },
            crossCuttingIssues: {
                issues: [
                    {
                        issue: String
                    }
                ],
                comment: String
            },
            competency: {
                competencies: [
                    {
                        competency: String
                    }
                ],
                comment: String
            }
        },
      
        development: {
            content: {
                activities: [
                    {
                        activity: String,
                        files: [{
                            fileType: String,
                            file: String
                        }],
                    }
                ],
                otherActivity: String
            },
            crossCuttingIssues: {
                issues: [
                    {
                        issue: String
                    }
                ],
                comment: String
            },
            competency: {
                competencies: [
                    {
                        competency: String
                    }
                ],
                comment: String
            }
        },
      
        conclusion: {
            content: {
                activities: [
                    {
                        activity: String,
                        files: [{
                            fileType: String,
                            file: String
                        }],
                    }
                ],
                otherActivity: String
            },
            crossCuttingIssues: {
                issues: [
                    {
                        issue: String
                    }
                ],
                comment: String
            },
            competency: {
                competencies: [
                    {
                        competency: String
                    }
                ],
                comment: String
            }
        },
        exercises: {
            questions: [
                {
                 difficultLevel: String,
                 questionsObjective: String,
                 question: String,
                 questionType: String,
                 possibleAnswer: [
                     {
                         answer: String
                     }
                 ],
                answers: [
                     {
                         answer: String
                     }
                 ],
                 points: Number
                      
                }
            ]
        }
    }, 
    teachingTechniques: {
        introduction: {
            contentFocus: [
                {
                    item: String
                }
            ],
            interactiveFocus: [
                {
                    item: String
                }
            ],
            criticalThinking: [
                {
                    item: String
                }
            ],
            production: [
                {
                    item: String
                }
            ],
            problemSolving: [
                {
                    item: String
                }
            ],
            reflection: [
                {
                    item: String
                }
            ],
            sitingArrangement: [
                {
                    item: String
                }
            ],
            duration: Number
        },
        development: {
            contentFocus: [
                {
                    item: String
                }
            ],
            interactiveFocus: [
                {
                    item: String
                }
            ],
            criticalThinking: [
                {
                    item: String
                }
            ],
            production: [
                {
                    item: String
                }
            ],
            problemSolving: [
                {
                    item: String
                }
            ],
            reflection: [
                {
                    item: String
                }
            ],
            sitingArrangement: [
                {
                    item: String
                }
            ],
            duration: Number
        },
        conclusion: {
            contentFocus: [
                {
                    item: String
                }
            ],
            interactiveFocus: [
                {
                    item: String
                }
            ],
            criticalThinking: [
                {
                    item: String
                }
            ],
            production: [
                {
                    item: String
                }
            ],
            problemSolving: [
                {
                    item: String
                }
            ],
            reflection: [
                {
                    item: String
                }
            ],
            sitingArrangement: [
                {
                    item: String
                }
            ],
            duration: Number
        },  
    },
    studentSelfAssessment: {
        type: String,
        enum: ['UNDERSTOOD', 'TOO-HARD', 'TOO-MUCH']
    },
    teacherSelfAssessment: {
        assessment: {
            type: String,
            enum: ['COMPLETED', 'NOT-COMPLETED']
        },
        reason: String,
        otherComments: String
    },
    time: {
        slotOnTimetable: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'timetable'
        },
        day: Date
    }
}, {
    timestamps: true
});

export default mongoose.model("plan", planSchema);
