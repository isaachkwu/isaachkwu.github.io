import type { Work } from "../types/Work";

export const works: Work[] = [
  {
    title: "BioTailor",
    description: "A web app for building complex genomic data analysis pipelines.",
    thumbnailImgUrl: "biotailor-1.webp",
    imagesUrl: [
      {
        imgUrl: "biotailor-1.webp",
        alt: "Drag-and-drop interface for building complex genomic data analysis pipelines.",
      },
      {
        imgUrl: "biotailor-2.webp",
        alt: "Dashboard for managing team members and pipeline expenses.",
      },
      {
        imgUrl: "biotailor-3.webp",
        alt: "Real-time dashboard for monitoring pipeline status and logs.",
      }
    ],
    link: "https://alpha-test.biotailor.org",
    tags: [
      'AWS', 'SST', 'React', 'Maven', 'TypeScript', 'Java', 'Dynamodb', 'Microservices', 'Serverless', 'Event-driven'
    ],
    company: "D24H",
    mainResponsibility: [
      "Designed the app architecture to ensure scalability and maintainability.",
      "Developed both frontend and backend using SST, React, and TypeScript.",
      "Implemented a serverless architecture with AWS Lambda and EventBridge.",
      "Led the development team and managed the project for a smooth workflow."
    ]
  },
  {
    title: "EiGENO",
    description: "A web app for visualizing and analyzing the genomic epidemiology of emerging pathogens.",
    mainResponsibility: [
      "Deployed the Django backend, React frontend, and PostgreSQL database on AWS using Terraform.",
      "Implemented horizontal scaling with AWS ECS and ALB, and integrated serverless components like AWS Lambda and S3.",
      "Created a seamless development and testing workflow on both local and AWS environments using Docker Compose.",
      "Collaborated with biologists to translate their requirements into technical solutions.",
      "Enhanced TIPars performance by 40% by optimizing the original algorithm."
    ],
    thumbnailImgUrl: "eigeno-1.webp",
    imagesUrl: [
      {
        imgUrl: "eigeno-1.webp",
        alt: "Interface for visualizing the Covid-19 phylogenetic tree with over 7 million data points.",
      },
      {
        imgUrl: "eigeno-2.webp",
        alt: "Graphical summary for a selected subset of the phylogenetic tree.",
      },
      {
        imgUrl: "eigeno-3.webp",
        alt: "Search and filter features for the phylogenetic tree.",
      },
      {
        imgUrl: "eigeno-4.webp",
        alt: "Integration with TIPars for inserting genomic sequences into the phylogenetic tree.",
      },
    ],
    link: "https://eigeno.com",
    tags: [
      'AWS', 'Terraform', 'Docker', 'PostgreSQL', 'Django', 'Horizontal Scaling', 'Serverless', 'Event-driven'
    ],
    company: "D24H"
  },
  {
    title: "TIPars Web",
    description: "A web app for rapid insertion of genomic sequences onto a reference phylogenetic tree.",
    thumbnailImgUrl: "tipars-1.webp",
    mainResponsibility: [
      "Designed an asynchronous task system using Celery and Redis to handle high request volumes.",
      "Deployed the Django backend and React frontend under Apache HTTP Server.",
      "Managed server maintenance and updates to ensure security and performance.",
      "Adapted the original program and handled sequence preprocessing for the TIPars tool."
    ],
    imagesUrl: [
      {
        imgUrl: "tipars-1.webp",
        alt: "Home page of TIPars Web, an algorithm created by Guangchuang Yu and YongTao Ye.",
      },
      {
        imgUrl: "tipars-2.webp",
        alt: "User interface for inserting genomic sequences onto the Covid-19 genomic tree.",
      },
      {
        imgUrl: "tipars-3.webp",
        alt: "Result page showing inserted sequences on an interactive graph.",
      },
    ],
    link: "https://tipars.hku.hk",
    tags: [
      'Apache HTTP Server', 'Django', 'Celery', 'React', 'PostgreSQL', 'Redis', 'Python', 'Javascript'
    ],
    company: 'D24H'
  },
  {
    title: 'Covid-19 Classification POC Model',
    description: 'A proof-of-concept machine learning model for classifying Covid-19 variants.',
    thumbnailImgUrl: 'covid-ml-1.webp',
    mainResponsibility: [
      "Researched Transformer models and its applications in bioinformatics.",
      "Developed a proof-of-concept model for classifying Covid-19 variants using the RoBERTa model.",
      "Proposed future directions for applying machine learning to genomic data.",
    ],
    imagesUrl: [
      {
        imgUrl: 'covid-ml-1.webp',
        alt: 'Fine-tuning architecture of the RoBERTa model for Covid-19 classification.',
      },
      {
        imgUrl: 'covid-ml-2.webp',
        alt: 'Hugging Face page for this model.',
      },
      {
        imgUrl: 'covid-ml-3.webp',
        alt: 'Technical details of the pre-trained model based on RoBERTa.',
      },
      {
        imgUrl: 'covid-ml-4.webp',
        alt: 'Workflow for fine-tuning the model, including preprocessing, tokenization, and training.',
      },
      {
        imgUrl: 'covid-ml-5.webp',
        alt: 'Model results showing accuracy, learning rate, and loss during training.',
      },
    ],
    link: 'https://huggingface.co/Isaacwu/omicron-delta-classifier-pipeline',
    tags: [
      'Python', 'PyTorch', 'Machine Learning', 'BERT'
    ],
    company: 'D24H',
  },
  {
    title: 'ARGNet Web',
    description: 'A web app for classifying antimicrobial resistance genes using machine learning.',
    thumbnailImgUrl: 'argnet-1.webp',
    mainResponsibility: [
      "Designed an asynchronous task system with Celery and Redis, separating the web and compute servers.",
      "Deployed the Django backend and React frontend under Apache HTTP Server.",
      "Adapted the original program for web application use.",
    ],
    imagesUrl: [
      {
        imgUrl: 'argnet-1.webp',
        alt: 'Home page of ARGNet Web, an application using the ARGNet model created by Y Pei.',
      },
      {
        imgUrl: 'argnet-2.webp',
        alt: 'User selects the model and inputs sequences for classification.',
      },
      {
        imgUrl: 'argnet-3.webp',
        alt: 'Result page showing ARG resistance category and probability.',
      },
    ],
    link: 'https://argnet.hku.hk',
    tags: [
      'Apache HTTP Server', 'Django', 'Celery', 'React', 'PostgreSQL', 'Python', 'Javascript'
    ],
    company: 'D24H'
  },
  {
    title: 'HKSTP Android App',
    description: 'An Android app for workers in Hong Kong Science Park, providing catering, transportation, and other services.',
    thumbnailImgUrl: 'hkstp-1.webp',
    mainResponsibility: [
      "Developed multiple flows, including login and registration.",
      "Collaborated with the team to implement the MVVM architecture.",
      "Experimented with declarative UI using Jetpack Compose.",
    ],
    imagesUrl: [
      {
        imgUrl: 'hkstp-1.webp',
        alt: 'App tabs: Home, Transportation, Events, Catering, and Profile.',
      },
      {
        imgUrl: 'hkstp-2.webp',
        alt: 'Screenshots of the home, transport, and event pages.',
      },
    ],
    tags: [
      'Android', 'Gradle', 'Kotlin', 'Java', 'Composition', 'OOP', 'MVVM'
    ],
    company: 'Innopage'
  },
  {
    title: 'Dr. Kong Android App',
    description: 'An Android app for Dr. Kong, a shoe store in Hong Kong.',
    thumbnailImgUrl: 'dr-kong-1.webp',
    mainResponsibility: [
      "Developed the home and map pages for the app.",
      "Implemented passive UI components using MVVM architecture.",
      "Created a parallax scrolling effect for the home page.",
    ],
    imagesUrl: [
      {
        imgUrl: 'dr-kong-1.webp',
        alt: 'Home page of Dr. Kong Android app, showing user loyalty points.',
      },
      {
        imgUrl: 'dr-kong-2.webp',
        alt: 'Screenshots of the home, loyalty point, and latest promotion pages.',
      },
    ],
    tags: [
      'Android', 'Gradle', 'Kotlin', 'Java', 'Composition', 'OOP', 'MVVM'
    ],
    link: 'https://play.google.com/store/apps/details?id=hk.com.drkong',
    company: 'Innopage'
  },
  {
    title: 'Blue Cross Android App',
    description: 'An Android app for Blue Cross, an insurance company in Hong Kong.',
    thumbnailImgUrl: 'blue-cross-1.webp',
    mainResponsibility: [
      "Updated the app's purchasing flow to the new design.",
      "Provided on-site support during the app launch.",
      "Worked with MVP and declarative UI architecture.",
    ],
    imagesUrl: [
      {
        imgUrl: 'blue-cross-1.webp',
        alt: 'Home page of the Blue Cross Android app.',
      },
      {
        imgUrl: 'blue-cross-2.webp',
        alt: 'Screenshots of pages for buying and claiming insurance.',
      }
    ],
    tags: [
      'Android', 'Gradle', 'Kotlin', 'Java', 'Composition', 'OOP', 'MVP'
    ],
    link: 'https://play.google.com/store/apps/details?id=hk.com.bluecross.mobileapp&hl=zh_HK',
    company: 'Innopage'
  }
]
