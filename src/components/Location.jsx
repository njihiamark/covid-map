function Location({loc, handleClick, selected}) {
    return (
        <div className={selected === loc.uid ? "p-3 cursor-pointer bg-gray-300": "p-3 cursor-pointer hover:bg-gray-100" } onClick={handleClick} >
            {loc.admin2}, {loc.provinceState}
        </div>
    )
}

export default Location;
