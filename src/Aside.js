function  Aside() {
    const styleNav = {
          listStyleType: 'none',
          fontSize: 18,
          textAlign: 'justify'
    };
    return (
        <aside  style={{flex: 1}}>
            <nav>
                <ul style={styleNav}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Interesting Things</a></li>
                    <li><a href="#">Boring Things</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div>
                <p style={{padding: 35}}>
                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                    asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                </p>
            </div>
        </aside>
    )
}
export default Aside;
