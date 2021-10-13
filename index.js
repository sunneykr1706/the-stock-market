function handleSubmit () {
    const search = document.getElementById('search').value;
    //const field = document.getElementById('field').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", search);
   // sessionStorage.setItem("SURNAME", field);

    return;
}