const { Student } = require("../model")
let studentList = [{
        id: 1,
        fullName: "Trần Đỗ Đại Phong",
        age: 23,
        numberClass: 12,
    },
    {
        id: 2,
        fullName: "Trần Đỗ Phong Nhã",
        age: 18,
        numberClass: 12,
    },
];
const getList = async() => {
    const studentList = await Student.findAll();
    if (studentList) {
        return studentList;
    }
    return false;
};

const getDetail = async(id) => {
    const student = await Student.findOne({
        where: {
            id
        }
    });

    if (student) {

        return student;
    } else {
        return false;
    }
}

const create = async(student) => {
    const newStudent = await Student.create(student)
        // const newstudent = {
        //     id: Math.random(),
        //     ...student,
        // };
        // studentList = [...studentList, newstudent];
    return newStudent;
}

const update = async(id, student) => {
    const studentUpdate = await getDetail(id);
    if (studentUpdate) {
        studentUpdate.fullName = student.fullName;
        studentUpdate.age = student.age;
        studentUpdate.numberClass = student.numberClass;
        const studentUpdated = await studentUpdate.save()
        return studentUpdated;
    } else {
        return false;
    }
}

const deleteById = async(id) => {
    const studentDelete = await getDetail(id);
    if (studentDelete) {
        await Student.destroy({
            where: {
                id,
            }
        });
        return studentDelete;
    } else {
        return false;
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
}