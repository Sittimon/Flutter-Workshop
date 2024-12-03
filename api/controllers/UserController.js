const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports ={
    signIn: async (req,res) =>{
        try{
            const row = await prisma.user.findFirst({
                select:{    //เลือกแสดงข้อมูลที่ใช้
                    id: true,
                    name: true,
                    user: true,
                    level: true
                },
                where:{
                    user: req.body.username,
                    pass: req.body.password,
                    status: 'use'
                }
            });

            if (row != undefined) {
                const key = process.env.SECRET_KEY;
                const token = jwt.sign(row , key ,{expiresIn: '10d'});

                return res.send({token: token});
            }else{
                return res.status(401).send('unauthorized'); // ถ้าไม่พบผู้ใช้
            }
        }catch (e) {
            return res.status(500).send({error : e.message});
        }
       
    },
    info: async (req, res) => {
        try {
            const authHeader = req.headers.authorization;

            // ตรวจสอบว่า Authorization header มีค่าหรือไม่
            if (!authHeader) {
                return res.status(401).send({ error: 'Authorization header is missing' });
            }

            // ตัด 'Bearer ' ออกจาก token
            const token = authHeader.replace('Bearer ', '').trim();
            const key = process.env.SECRET_KEY;

            // ตรวจสอบ token
            const payload = jwt.verify(token, key);
            
            // ส่งข้อมูล payload
            res.send(payload);
        } catch (e) {
            console.log({ error: e });  // ดูข้อผิดพลาดใน console
            res.status(500).send({ error: e.message });
        }
    }
};