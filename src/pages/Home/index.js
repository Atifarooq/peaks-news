import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Home = () => {

    return (
        <>
            <Section title="Top Stories" toolbar={
                <Button>View Bookmark</Button>
            }>
                <Card sm={12} md={6} lg={4} xl={3} />
                <Card sm={12} md={6} lg={4} xl={3} />
                <Card sm={12} md={6} lg={4} xl={3} />
                <Card sm={12} md={6} lg={4} xl={3} />
            </Section>

            <Section title="Sports" toolbar={
                <a>See All</a>
            }>
                <Card sm={12} md={6} lg={4} xl={4} />
                <Card sm={12} md={6} lg={4} xl={4} />
                <Card sm={12} md={6} lg={4} xl={4} />
            </Section>
        </>
    )
}

export default Home;
