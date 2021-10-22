const checkEmpty = (req, res, next) => {
    const { fullName, age, numberClass } = req.body;
    if (fullName && age && numberClass) {
        next();
    } else {
        res.status(500).send("Không được để trống fullName, age,nummber");
    }
}
module.exports = {
    checkEmpty
}