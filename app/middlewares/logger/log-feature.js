const logFeature = (req, res, next) => {
    console.log("đây là tính năng danh sach học sinh");
    next();
}
module.exports = {
    logFeature
}