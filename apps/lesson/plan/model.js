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
    knowledge: [{
        topic: String,
        bloomTaxonomy: {
            type: String,
            enum: ['REMEMBERING', 'UNDERSTANDING']
        },
        standardCriteriaPerfomance: Number,
    }],
    skills:[{
        topic: String,
        bloomTaxonomy: {
            type: String,
            enum: ['APPLYING']
        },
        standardCriteriaPerfomance: Number,
    }],
    attitudesAndValues: [{
        topic: String,
        bloomTaxonomy: {
            type: String,
            enum: ['CREATING', 'EVALUATING', 'ANALYZING']
        },
        standardCriteriaPerfomance: Number,
    }],
    instructionalMaterial: [{
        insType: {
            type: String,
            enum: ['PRINTS','AUDIO','VISUALS','AUDIO-VISUAL','ELECTRONIC-INTERACTIVES','MEASUMENT-TOOLS']
        },
        material: String,
    }],
    otherMaterialsAndReferences: String,
    activities: {
        introduction: {
            activities: [{
                activity: String
            }],
            otherActivity: String,
            crossCuttingIssues: {
                type: String,
                enum: ['GENOCIDE-STUDIES','ENVIRONMENT-AND-SUSTAINABILITY','GENDER','COMPREHENSIVE-SEXUALITY-EDUCATION','PEACE-AND-VALUES-EDUCATION','FINANCIAL-EDUCATION','STANDARDISATION-CULTURE','INCLUSIVE-EDUCATION']
            },
            crossCuttingIssuesComment: String,
            competency: {
                type: String,
                ENUM: ['CRITICAL-THINKING','RESEARCH-AND-PROBLEM-SOLVING','CREATIVITY-AND-INNOVATION','COMMUNICATION','COOPERATION-INTERPERSONAL-MANAGEMENT-AND-LIFE-SKILLS','LIFELONG-LEARNING']
            },
            competencyComment: String 
        },
        development: {
            activities: [{
                activity: String
            }],
            otherActivity: String,
            crossCuttingIssues: {
                type: String,
                enum: ['GENOCIDE-STUDIES','ENVIRONMENT-AND-SUSTAINABILITY','GENDER','COMPREHENSIVE-SEXUALITY-EDUCATION','PEACE-AND-VALUES-EDUCATION','FINANCIAL-EDUCATION','STANDARDISATION-CULTURE','INCLUSIVE-EDUCATION']
            },
            crossCuttingIssuesComment: String,
            competency: {
                type: String,
                ENUM: ['CRITICAL-THINKING','RESEARCH-AND-PROBLEM-SOLVING','CREATIVITY-AND-INNOVATION','COMMUNICATION','COOPERATION-INTERPERSONAL-MANAGEMENT-AND-LIFE-SKILLS','LIFELONG-LEARNING']
            },
            competencyComment: String 
        },
        conclusion: {
            activities: [{
                activity: String
            }],
            otherActivity: String,
            crossCuttingIssues: {
                type: String,
                enum: ['GENOCIDE-STUDIES','ENVIRONMENT-AND-SUSTAINABILITY','GENDER','COMPREHENSIVE-SEXUALITY-EDUCATION','PEACE-AND-VALUES-EDUCATION','FINANCIAL-EDUCATION','STANDARDISATION-CULTURE','INCLUSIVE-EDUCATION']
            },
            crossCuttingIssuesComment: String,
            competency: {
                type: String,
                ENUM: ['CRITICAL-THINKING','RESEARCH-AND-PROBLEM-SOLVING','CREATIVITY-AND-INNOVATION','COMMUNICATION','COOPERATION-INTERPERSONAL-MANAGEMENT-AND-LIFE-SKILLS','LIFELONG-LEARNING']
            },
            competencyComment: String 
        },
        exercises: {
            questions: [{
                difficultLevel: {
                    type: String,
                    enum: ['EASY','MEDIUM','DIFFICULT']
                },
                questionsObjective: {
                    type: String,
                    enum: ['REMEMBERING','UNDERSTANDING','APPLYING','ANALYSING','CREATING','EVALUATING']
                },
                question: String,
                questionType: {
                    type: String,
                    enum: ['MULTI-CHOICE', 'TRUE/FALSE', 'MATCHING','FILL-IN-THE-BLANK','SHORT-ANSWER','LONG-ANSWER']
                },
                possibleAnswer: [{
                        answer: String
                }],
                answers: [{
                    answer: String
                }],
                points: Number
            }]
        }
    },
    teachingTechniques: {
        introduction:{
            contentFocus: {
                type: String,
                enum: ['LIVE-LECTURING','AUDIO-VISUAL-PRESENTATIONS','ASSINGED-READING/TEXT','GUEST-SPEAKERS','CLASSROOM-DISPLAYS','FIELD-VISIT','PEER-TEACHING']
            },
            interactiveFocus: {
                type: String,
                enum: ['GROUP-WORK','DIRECTED-QUESTION-AND-ANSWER','FACILITATED-SYNCHRONOUS-DISCUSSION','JIGSAW-COLLABORATIVE-INFORMATION-SHARING','GROUP-ASSIGNMENTS','PEER-TO-PEER-LEARNING']
            },
            criticalThinking: {
                type: String,
                enum: ['CLASS-DISCUSSIONS-DEBATES','RESPONSE-TO-AN-ASSIGNMENT']
            },
            production: {
                type: String,
                enum: ['SKILLS-PRACTICE','DEMONSTRATION-AND-MODELING','INFOGRAPHIC','ORAL-SUMMARY','WRITTEN-SUMMARY','CLASS-TEST']
            },
            problemSolving: {
                type: String,
                enum: ['RESEARCH-INQUIRY','SIMULATION','CASE-STUDY','CLASS-SOLUTION-AND-CONSEQUENCE','ROLE-PLAY']
            },
            reflection: {
                type: String,
                enum: ['REFLECTION-ON-LEARNING','SELF-ASSESSMENT','PRIOR-UNDERSTNDING']
            },
            sitingArrangement: {
                type: String,
                enum: ['LECTURE/INDEPENDENT-WORK/TEST','GROUP-WORK/STATIONS','DEMONSTRATION/DISCUSSION']
            },
            duration: Number
        },
        development:{
            contentFocus: {
                type: String,
                enum: ['LIVE-LECTURING','AUDIO-VISUAL-PRESENTATIONS','ASSINGED-READING/TEXT','GUEST-SPEAKERS','CLASSROOM-DISPLAYS','FIELD-VISIT','PEER-TEACHING']
            },
            interactiveFocus: {
                type: String,
                enum: ['GROUP-WORK','DIRECTED-QUESTION-AND-ANSWER','FACILITATED-SYNCHRONOUS-DISCUSSION','JIGSAW-COLLABORATIVE-INFORMATION-SHARING','GROUP-ASSIGNMENTS','PEER-TO-PEER-LEARNING']
            },
            criticalThinking: {
                type: String,
                enum: ['CLASS-DISCUSSIONS-DEBATES','RESPONSE-TO-AN-ASSIGNMENT']
            },
            production: {
                type: String,
                enum: ['SKILLS-PRACTICE','DEMONSTRATION-AND-MODELING','INFOGRAPHIC','ORAL-SUMMARY','WRITTEN-SUMMARY','CLASS-TEST']
            },
            problemSolving: {
                type: String,
                enum: ['RESEARCH-INQUIRY','SIMULATION','CASE-STUDY','CLASS-SOLUTION-AND-CONSEQUENCE','ROLE-PLAY']
            },
            reflection: {
                type: String,
                enum: ['REFLECTION-ON-LEARNING','SELF-ASSESSMENT','PRIOR-UNDERSTNDING']
            },
            sitingArrangement: {
                type: String,
                enum: ['LECTURE/INDEPENDENT-WORK/TEST','GROUP-WORK/STATIONS','DEMONSTRATION/DISCUSSION']
            },
            duration: Number
        },
        conclusion:{
            contentFocus: {
                type: String,
                enum: ['LIVE-LECTURING','AUDIO-VISUAL-PRESENTATIONS','ASSINGED-READING/TEXT','GUEST-SPEAKERS','CLASSROOM-DISPLAYS','FIELD-VISIT','PEER-TEACHING']
            },
            interactiveFocus: {
                type: String,
                enum: ['GROUP-WORK','DIRECTED-QUESTION-AND-ANSWER','FACILITATED-SYNCHRONOUS-DISCUSSION','JIGSAW-COLLABORATIVE-INFORMATION-SHARING','GROUP-ASSIGNMENTS','PEER-TO-PEER-LEARNING']
            },
            criticalThinking: {
                type: String,
                enum: ['CLASS-DISCUSSIONS-DEBATES','RESPONSE-TO-AN-ASSIGNMENT']
            },
            production: {
                type: String,
                enum: ['SKILLS-PRACTICE','DEMONSTRATION-AND-MODELING','INFOGRAPHIC','ORAL-SUMMARY','WRITTEN-SUMMARY','CLASS-TEST']
            },
            problemSolving: {
                type: String,
                enum: ['RESEARCH-INQUIRY','SIMULATION','CASE-STUDY','CLASS-SOLUTION-AND-CONSEQUENCE','ROLE-PLAY']
            },
            reflection: {
                type: String,
                enum: ['REFLECTION-ON-LEARNING','SELF-ASSESSMENT','PRIOR-UNDERSTNDING']
            },
            sitingArrangement: {
                type: String,
                enum: ['LECTURE/INDEPENDENT-WORK/TEST','GROUP-WORK/STATIONS','DEMONSTRATION/DISCUSSION']
            },
            duration: Number
        }
    },
    studentSelfAssessment: {
        type: String,
        enum: ['UNDERSTOOD','TOO-HARD','TOO-MUCH']
    },
    teacherSelfAssessment: {
        assessment: {
            type: String,
            enum: ['COMPLETED','NOT-COMPLETED']
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
}, {timestamps: true});

export default mongoose.model("plan", planSchema);
