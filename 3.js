function builder(appointment){
    const { doctorName, patientName, date, time } = appointment;
    return `Уважаемый(ая) ${patientName}, вы записаны к врачу (${doctorName}) на ${date} в ${time}. Пожалуйста, не опаздывайте!`
}

const myAppointment = {
        patientName: "Илья",
        doctorName: "Алексей",
        date: "14.10.2026",
        time: "14:30",
    }

    console.log(builder(myAppointment))