function MockMain () {

    const handleClick = () => {
        alert("Added to Favourite");
    }



    return (
        <>
        <h2 className="favH2">Mock Main </h2>
        <p>Add to Favourite</p><button onClick={handleClick} style={{color: 'red'}}>❤</button>
        <hr></hr>
        </>
    )
}

export default MockMain;