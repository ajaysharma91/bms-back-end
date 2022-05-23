const userService = require('../services/user.service.js')
const userMiddleware = require('../middleware/user')
const utility = require('../config/utility')
const emailtemplate = require('../model/emailtemplate')
var device = require('express-device');
var os = require('os');
var ip = require("ip");
exports.userController = {
    register: async (req, res) => {
        const { email } = req.body;
        const isExist = await userMiddleware.userExist(email)

        if (isExist) return res.status(403).json({ success: true, message: 'User is Already Registered.!!' })
        else if (!isExist){
          console.log("is Exit");
            // var verifyingLink = utility.getEncryptText(
            //     Math.random().toString(4).slice(2) + new Date().getTime()
            //   );
              var userMailData = {
                email: req.body.email,
                name: req.body.name,
               // verifying_token: verifyingLink,
              };
              console.log("mailData---",userMailData);
              
              
                    let selectedSubject = "Thank you for registration"
                   // let selectedContent = emaildataresult.content;
                   let message ="thank you"
                   let ipAddress = ip.address()
                   console.log({ipAddress});
                   let deviceName = os.hostname()
                   console.log({deviceName});
                   let content = `your IP Adress ${ipAddress} and device ${deviceName}`
                
                   
                    utility.sendmail(
                        userMailData.email,
                        selectedSubject,
                        content,
                        message,
                        async (err, finalresult) => {
                          if (err) {
                              console.log({err});
                            throw new Error(err);
                          } else if (finalresult) {
                              console.log("in finalresult");
                     let user = await userService.createUser(req.body)
                          res.status(201).json({ success: true, data: user, message: 'User Registred Successfully..!!' })      
                            await saveobj.save();
      
                            utility.sucesshandler(
                              res,
                              "Registered successfully,please verfiy your email to login"
                            );
                          }
                        }
                      );
                    
                
        }
       
    },
    getAll: async (req, res) => {
        try {
            const users = await userService.getAll()
            res.status(200).json({ success: true, data: users })
        } catch (error) {
            console.log(error)
        }
    },
    getUserById: async (req, res) => {
        try {
            const { id } = req.params
            const user = await userService.getUserById(id)
            res.status(200).json({ success: true, data: user })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.body
            const user = await userService.delete(id)
            res.status(200).json({ success: true, data: user, message: 'Deleted Successfully.' })
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const userData = req.body
            const user = await userService.update(id, userData)
            res.status(200).json({ success: true, data: user, message: 'Updated SuccessFully' })
        } catch (error) {
            console.log(error)
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await userService.findUserByEmail(email)
            if (user) {
                const match = await userService.matchPassword(user.password, password)
                let token
                if (match) {
                    token = await userMiddleware.generateJWTtoken(user.username)
                    await userService.updateUserWithToken(user.id, token)
                    const data = {
                        user,
                        token
                    }
                    return res.status(200).json({ success: true, data: data, message: '' })
                }

            }

            res.status(200).json({ success: true, data: user, message: 'Email or Password do not match' })

        } catch (error) {
            console.log(error)
        }
    }

}


