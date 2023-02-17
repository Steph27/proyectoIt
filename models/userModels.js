
//Es la configuración de la colección 'Users' de la DB

const { Schema, model, trusted} = require('mongoose');
const bcrypt = require('bcryptjs');

// modelo
const UserSchema = new Schema(
    {
        nombre_apellido: {
            type: String,
            required: true // Dato obligatorio
        },
        email: { 
            type: String, 
            required: true, 
            unique: true // unique: true para que no se pueda registrar 2 veces el mismo mail 
        },
        telefono: {
            type: Number,
            required: true,
            unique: true
        },
        password: { 
            type: String, 
            required: true
        },
    },
    {
        timestamps: true,
    }
);


// Cifrar la contraseña con bcrypt
    UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);  
    return await bcrypt.hash(password, salt);
}
// Matchear la pass con la que tenenemos en la basa de datos
    UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

//Exportamos la configuracio con la coleccion
module.exports = model('User', UserSchema);

