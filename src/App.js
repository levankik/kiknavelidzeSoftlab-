import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

const styleSection={
    display: 'flex'
}

function App() {
  return (
    <div>
      <Header  title="My Website!"/>
      <section style={styleSection}>
          <Aside/>
          <main  style={{flex: 3, height: 700}}>
              <h1>Lorem Ipsum</h1>
              <p>
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                 asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
              <p>
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
              <p>
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
              <p>
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
              <p>
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
              <p>
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                  asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
              </p>
          </main>
      </section>
      <Footer text="Footer"/>
    </div>
  );
}

export default App;
