function obtenerUsuario(id, cb) {
    let usuario;
    
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: 'John Doe' };
        cb(usuario);
      }
    }, 2000);
}
  
obtenerUsuario(1, (usuario) => {
    console.log(usuario);
});
  
