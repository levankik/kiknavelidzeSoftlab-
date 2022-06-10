import './Header.css';

export default Header;
function Header({title}) {

    const style = {
        backgroundColor: '#112941',
        color: 'white',
        display: 'flex'
    }

    return (
        <header style={style}>

            <div style={{flex: 1}}>
                <img src="./logo192.png" alt="logo" height={100} align={'right'}/>
            </div>
            <div style={{flex: 3}}>
                <h1 style={{padding: 10}}>{title}</h1>
            </div>
        </header>
    )
}

