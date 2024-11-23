import { ContactForm } from '../components/ContactForm/ContactForm';
import { NavBar } from '../components/NavBar/NavBar';
import { SideBar } from '../components/SideBar/SideBar';

const Contact = () => {
  return (
    <>
      <NavBar />
      <main className="dashboard">
        <SideBar />
        <section className="dashboard__content">
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Contact;
