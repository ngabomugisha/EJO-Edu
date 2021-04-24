import User from "./repo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passportConfig from "../../config/passport";
import Response from "../../utils/Responses";
import Mailer from '../../utils/mail/mail'

exports.createUser = async (req, res) => {
    try {
        // console.log(req.body);
        const {
            firstName,
            lastName,
            email,
            school,
            role,
            phoneNumber,
            level,
            yearsOfExperience,
            workingStatus
        } = req.body;

        const checkEmail = await User.getUserByEmail(email);
        if (checkEmail)
            return Response.validationError(res, "Email already exists");

        const password = Math.floor(100000 + Math.random() * 900000);
        const verificationDigits = Math.floor(100000 + Math.random() * 900000);

        const hashedPassword = await bcrypt.hash(password.toString(), 10);
        const userData = User.create(firstName, lastName, email, hashedPassword, school, role, verificationDigits, phoneNumber, level, yearsOfExperience, workingStatus);
        const data = {
            _id: userData._id,
            firstName,
            lastName,
            email,
            school,
            role,
            isVerified: userData.isVerified,
            phoneNumber,
            level,
            yearsOfExperience,
            workingStatus
        }
        const token = jwt.sign({
            user: data
        }, passportConfig.secret);
        // set up the mail server
        const newMail = new Mailer({to: email, subject: "EJO: Password", header: null, messageBody: "Hello " + firstName + " " + lastName + " your password for Ejo system is: " +password, messageHeader: "Password"})
        newMail.sendMail()
        return Response.Success(res, 200, "user signed up successfully", {
            user: data,
            password,
            token: token
        });

    } catch (err) {
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.regenerateVerificationDigits = async (req, res) => {
    try {
        const {
            _id
        } = req.user;
        const verificationDigits = Math.floor(100000 + Math.random() * 900000);
        console.log(verificationDigits);
        await User.update(_id, {
            verificationDigits
        });

        //Remember to send via email
        return Response.Success(res, 200, {
            verificationDigits
        }, "Verification digits generated and sent via email");

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.generateResetPasswordToken = async (req, res) => {
    try {
        const {
            email
        } = req.body;

        
        const userData = await User.getUserByEmail(email);
        if (!email || !userData)
            return Response.validationError(res, "Email does not exist");

        const resetPasswordToken = Math.floor(100000 + Math.random() * 900000);
        const hashedToken = await bcrypt.hash(resetPasswordToken.toString(), 10);
        await User.update(userData._id, {
            resetPasswordToken: hashedToken
        });

        //Remember to send via email
        return Response.Success(res, 200, {
            resetPasswordToken
        }, "Reset Password Token generated and sent via email");

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.verifyEmail = async (req, res) => {
    try {
        const {
            _id
        } = req.user;
        const {
            verificationDigits
        } = req.body;
        const savedUser = await User.getUserById(_id);
        if (!savedUser || !savedUser.verificationDigits)
            return Response.validationError(res, "Invalid token");

        if (savedUser.verificationDigits.toString() !== verificationDigits)
            return Response.validationError(res, "Invalid verification digits");

        await User.update(_id, {
            verificationDigits: null,
            isVerified: true
        });
        return Response.Success(res, 200, "Successfuly verified email");

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.signin = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        console.log(req.body);
        const userData = await User.getUserByEmail(email);
        if (!userData)
            return Response.notFoundError(res, "User not found");
        if (!await bcrypt.compare(password, userData.password))
            return Response.authorizationError(res, "wrong password");

        const data = {
            _id: userData._id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            role: userData.role,
            school: userData.school,
            isVerified: userData.isVerified
        }

        const results = data;
        const token = jwt.sign({
            user: data
        }, passportConfig.secret);

        return Response.Success(res, 200, "user signed in successfully", {
            user: results,
            token: token
        });

    } catch (error) {
        console.log(error)
        return Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.verifyToken = async (req, res) => {
    try {
        const {
            _id
        } = req.user;
        const userData = await User.getUserById(_id);
        if (!userData)
            Response.notFoundError(res, "Invalid token");

        const data = {
            _id: userData._id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            isVerified: userData.isVerified
        }
        const token = jwt.sign({
            user: data
        }, passportConfig.secret);

        return Response.Success(res, 200, "token is valid", {
            user: data
        });
    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.updateName = async (req, res) => {
    try {
        const {
            _id
        } = req.user;
        const {
            firstName,
            lastName
        } = req.body;
        await User.update(_id, {
            firstName,
            lastName
        });
        return Response.Success(res, 200, "Name updated successfully");

    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.updatePassword = async (req, res) => {
    try {
        const {
            _id
        } = req.user;
        const {
            oldPassword,
            newPassword
        } = req.body;
        const userData = await User.getUserById(_id);
        if (!userData)
            return Response.validationError(res, "account does not exist");

        if (!await bcrypt.compare(oldPassword, userData.password))
            return Response.validationError(res, "wrong password");

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.update(_id, {
            password: hashedPassword
        });

        return Response.Success(res, 200, "password updated successfully");

    } catch (error) {
        console.log(error);
        return Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const {
            email,
            resetPasswordToken,
            newPassword
        } = req.body;
        const userData = await User.getUserByEmail(email);
        if (!userData)
            return Response.validationError(res, "wrong email");
        console.log(resetPasswordToken)
        if (!userData.resetPasswordToken || !await bcrypt.compare(resetPasswordToken, userData.resetPasswordToken))
            return Response.validationError(res, "wrong token");

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await User.update(userData._id, {
            resetPasswordToken: null,
            password: hashedPassword
        });

        return Response.Success(res, 200, "password updated successfully");

    } catch (error) {
        console.log(error);
        return Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}

exports.emailTaken = async (req, res) => {
    try {
        const {
            email
        } = req.body;
        const savedUser = await User.getUserByEmail(email);
        if (!savedUser)
            return Response.Success(res, 200, "Email is not taken");
        if (savedUser)
            return Response.validationError(res, "Email is taken");
    } catch (error) {
        console.log(error);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
}


exports.getSchoolEmployees = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;

        User.getSchoolEmployees(schoolId)
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
