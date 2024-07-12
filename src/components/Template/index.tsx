import Container from "@src/components/Container";
import React from 'react';

const Template = () => {
    const templates = [
        {
            title: "123Tradies",
            description: "A simple and clean template for tradies",
            category: "Tradies",
            image: "https://viatour-reactjs.ibthemespro.com/img/tourCards/1/1.png",
        },
        {
            title: "Tourism",
            description: "A simple and clean template for tourism",
            category: "Tourism",
            image: "https://viatour-reactjs.ibthemespro.com/img/tourCards/1/2.png",
        },
        {
            title: "Real Estate",
            description: "A simple and clean template for real estate",
            category: "Real Estate",
            image: "https://viatour-reactjs.ibthemespro.com/img/tourCards/1/3.png",
        },
        {
            title: "Construction",
            description: "A simple and clean template for construction",
            category: "Construction",
            image: "https://viatour-reactjs.ibthemespro.com/img/tourCards/1/4.png",
        }
    ]
    return (
        <div className="bg-rose-white">
            <Container className="py-20 space-y-10">
                <h2 className="text-2xl font-semibold">Our template</h2>
                <ul className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                    {
                        templates.map(
                            (template, index) => (
                                <li
                                    key={index}
                                >
                                    <div className="p-2.5 border bg-white rounded space-y-2">
                                        <img
                                            src={template.image}
                                            alt={template.title}
                                            className="block w-full aspect-square rounded-lg object-cover"
                                        />
                                        <div className="space-y-2">
                                            <div
                                                className="text-gray-500 space-x-1 w-fit hover:text-deep-carrot-orange cursor-pointer duration-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="inline-block w-3.5 h-3.5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                                                    />
                                                </svg>
                                                <span className="text-sm">{template.category}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-medium text-lg hover:text-deep-carrot-orange duration-300 cursor-pointer">{template.title}</h3>
                                                <p className="text-sm truncate">{template.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            )
                        )
                    }
                </ul>
            </Container>
        </div>

    );
};

export default Template;