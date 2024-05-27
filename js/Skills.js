// Define the Skills function
function Skills() {
    return `
        <div class="skills">
            <h2>I have experience with these technologies</h2>
            <div class="skillsGrid">
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg', alt: 'The logo icon for Azure', title: 'Azure' })}
                ${window.Skill({ source: '../media/assets/LangchainLogo.png', alt: 'The logo icon for Langchain', title: 'Langchain' })}
                ${window.Skill({ source: '../media/assets/hf-logo.svg', alt: 'The logo icon for HuggingFace', title: 'HuggingFace' })}
                ${window.Skill({ source: '../media/assets/chroma.svg', alt: 'The logo icon for Chroma DB', title: 'Chroma' })}
                ${window.Skill({ source: '../media/assets/UiPath.svg', alt: 'The logo icon for UiPath', title: 'UI Path' })}
                ${window.Skill({ source: '../media/assets/Blueprism.svg', alt: 'The logo icon for BluePrism', title: 'Blueprism' })}
                ${window.Skill({ source: '../media/assets/OpenAI_Logo.png', alt: 'The logo icon for OpenAI', title: 'Open AI' })}
                ${window.Skill({ source: '../media/assets/pinecone_logo.png', alt: 'The logo icon for Pinecone', title: 'Pinecone' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg', alt: 'The logo icon for Python', title: 'Python' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg', alt: 'The logo icon for Pytorch', title: 'PyTorch 5' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg', alt: 'The logo icon for Open CV', title: 'Open CV' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original-wordmark.svg', alt: 'The logo icon for Django Rest', title: 'Django Rest Framework' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg', alt: 'The logo icon for Git', title: 'Git' })}
                ${window.Skill({ source: '../media/assets/microsoft_powerbi.svg', alt: 'The logo icon for Power BI', title: 'Power BI' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', alt: 'The logo icon for My SQL', title: 'SQL' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg', alt: 'The logo icon for Jupyter', title: 'Jupyter' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original-wordmark.svg', alt: 'The logo icon for Streamlit', title: 'Streamlit' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', alt: 'The logo icon for ScikitLearn', title: 'Scikitlearn' })}
               
                </div>
        </div>`;
}

// Export the Skills function
export default Skills;
