function FormContato() {
    return ( 
        <>
           <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0
        }}>
            <form action="" style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <input
                    type="text"
                    placeholder="Nome"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginBottom: '15px',
                        width: '120%'
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginBottom: '15px',
                        width: '120%'
                    }}
                />
                <textarea
                    placeholder="Mensagem Livre"
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        marginBottom: '15px',
                        width: '120%',
                        height: '100px',
                        resize: 'none'
                    }}
                />
                <input
                    type="button"
                    value="Enviar"
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        padding: '12px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        width: '120%',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                />
            </form>
        </div>
        </>
     );
}

export default FormContato;