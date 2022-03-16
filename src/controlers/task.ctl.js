const express = require('express');
const router = express.Controler();
const getNone = (req, res) => {
    res.json({ message: "Estan en la ruta home" });
}

const getContact = (req, res) => {
    res.json({ message: "Estan en la ruta Contact" });
}

const getPorfile = (req, res) => {
    res.json({ message: "Estan en la ruta Porfile" });
}

const getSignin = (req, res) => {
    res.json({ message: "Estan en la ruta Signin" });
}

const getSignup = (req, res) => {
    res.json({ message: "Estan en la ruta Signup" });
}

module.exports = { getNone, getContact, getPorfile, getSignin, getSignup };