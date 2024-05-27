// Define the Skills function
function Skills() {
    return `
        <div class="skills">
            <h2>I have experience with these technologies</h2>
            <div class="skillsGrid">
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg', alt: 'The logo icon for react', title: 'Azure' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg', alt: 'The logo icon for HTML 5', title: 'PyTorch 5' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg', alt: 'The logo icon for CSS3', title: 'Tensorflow' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg', alt: 'The logo icon for Git', title: 'Git' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg', alt: 'The logo icon for Python', title: 'Python' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg', alt: 'The logo icon for Pandas', title: 'Pandas' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg', alt: 'The logo icon for Numpy', title: 'Numpy' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg', alt: 'The logo icon for Open CV', title: 'Open CV' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', alt: 'The logo icon for My SQL', title: 'SQL' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original-wordmark.svg', alt: 'The logo icon for MatplotLib', title: 'Matplotlib' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg', alt: 'The logo icon for FastAPI', title: 'Fast API' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg', alt: 'The logo icon for Jupyter', title: 'Jupyter' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg', alt: 'The logo icon for HTML 5', title: 'HTML 5' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg', alt: 'The logo icon for CSS 3', title: 'CSS 3' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original-wordmark.svg', alt: 'The logo icon for Streamlit', title: 'Streamlit' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original-wordmark.svg', alt: 'The logo icon for Django Rest', title: 'Django Rest Framework' })}
                ${window.Skill({ source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', alt: 'The logo icon for ScikitLearn', title: 'Scikitlearn' })}
               
                </div>
        </div>`;
}

// Export the Skills function
export default Skills;
