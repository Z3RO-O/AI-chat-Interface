export const workspace = [
    {
        id: "1",
        value: "Revenue Growth Management",
        label: "Revenue Growth Management",
        lastUpdate: "Updated 3 days ago",
    },
]

export const tableData = [
    {
        id: "1",
        name : "RGM Interview",
        project:"REVUP",
        role:"RGM",
        date:"Dec 12, 2021",
        strength:"Strong",
        location:"Australia",
    },
    {
        id: "2",
        name : "RGM Interview",
        project:"REVUP",
        role:"RGM",
        date:"Dec 12, 2021",
        strength:"Very Strong",
        location:"Australia",
    },
    {
        id: "3",
        name : "RGM Interview",
        project:"REVUP",
        role:"RGM",
        date:"Dec 12, 2021",
        strength:"Weak",
        location:"Australia",
    },
    {
        id: "4",
        name : "RGM Interview",
        project:"REVUP",
        role:"RGM",
        date:"Dec 12, 2021",
        strength:"Very weak",
        location:"Australia",
    },
]

export const converstions = [
    {
        time: "Today",
        initials: "RG",
        value:"How does promotional calendar look like for next quarter?",
    },
    {
        time: "Today",
        initials: "RG",
        value:"What is something I need to know about the new product launch?",
    },
    {
        time: "Yesterday",
        initials: "RG",
        value:"What are the challenges that the team is facing?",
    },
    {
        time: "Yesterday",
        initials: "AU",
        value:"What is the most crucial step we need to take to improve the sales?",
    },
]

export const sections = [
    {
        title:'Chat',
    },
    {
        title:'Content Library',
    },
    {
        title:'Knowledge',
    },
   
]
export const response = {
    ok: true, // Simulating a successful response
    text: async () => {
        // Simulating a markdown response from the AI
        return (`
            # AI Response

            ## Hello, how can I assist you today?

            Here are some suggestions:

            - Check out our latest products.
            - Learn more about our services.
            - Contact our support team for assistance.`);
    }
};