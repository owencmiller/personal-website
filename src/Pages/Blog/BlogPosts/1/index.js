import P5test from "./P5test"

export const post1 = {
    id: 1,
    title: "The First Blog Post",
    date: "Nov 27, 2021",
    summary: "This is the first blog post on my website. I am using it to test out the functionality of p5js's integration with react and \
    to work on formatting.",
    content: [
        "This is the first blog post and is being used as a test for the website.",
        <P5test/>,
        "The previous react component is testing if p5 components are working. You should see a red circle."
    ]
}