import React from "react";
import Container from "../Components/Container/Container";
import ContactForm from "../Components/ContactForm/ContactForm";
import Filter from "../Components/Filter/Filter";
import ContactsList from "../Components/ContactsList/ContactsList";

function PhonebookPage () {
    return (
        <>
            <Container title="Phonebook">
                <ContactForm />
            </Container>

            <Container title="Contacts">
                <Filter />
                <ContactsList />
            </Container>
        </>
    )
}

export default PhonebookPage;