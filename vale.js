

const ValeSalida = db.define('valeSalida', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    puesto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    articulos: {
        type: DataTypes.JSON, // Para almacenar una lista de artículos como un objeto JSON
        allowNull: false
    },
    observaciones: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    estatus: {
        type: DataTypes.ENUM('Nuevo', 'Usado y funcional'), // Opciones definidas
        allowNull: false
    },
    fechaSalida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaEntrega: {
        type: DataTypes.DATE,
        allowNull: false
    },
    firma: {
        type: DataTypes.STRING, // Puede almacenar una representación de la firma (por ejemplo, base64)
        allowNull: true
    }
}, {
    hooks: {
        beforeCreate: async (valeSalida) => {
            // Aquí puedes añadir cualquier lógica antes de crear el registro, si es necesario
        }
    }
});

// Método personalizado si es necesario
ValeSalida.prototype.obtenerResumen = function () {
    return {
        nombre: this.nombre,
        puesto: this.puesto,
        estatus: this.estatus,
        fechaSalida: this.fechaSalida,
        fechaEntrega: this.fechaEntrega
    };
};

export default ValeSalida;
