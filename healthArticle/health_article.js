// Health articles data
const articlesData = {
    "articles": [
      {
        "title": "The Importance of Regular Exercise",
        "description": "This article discusses the numerous benefits of regular exercise, including improved cardiovascular health, stronger muscles, better mental health, and increased longevity.",
        "ways_to_achieve": [
          "Engage in at least 150 minutes of moderate-intensity aerobic activity per week.",
          "Incorporate strength training exercises for major muscle groups at least twice a week.",
          "Find physical activities you enjoy, such as walking, cycling, swimming, or dancing."
        ],
        "benefits": [
          "Enhanced cardiovascular fitness and reduced risk of heart diseases.",
          "Stronger muscles and improved bone density.",
          "Better mood and reduced risk of depression and anxiety.",
          "Increased lifespan and overall better quality of life."
        ]
      },
      {
        "title": "Healthy Eating Habits for a Balanced Life",
        "description": "Learn about the fundamentals of a balanced diet, including tips on incorporating fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals.",
        "ways_to_achieve": [
          "Consume a variety of colorful fruits and vegetables daily.",
          "Opt for whole grains like brown rice, quinoa, and whole wheat bread.",
          "Choose lean sources of protein such as poultry, fish, beans, and nuts.",
          "Incorporate healthy fats from sources like avocados, olive oil, and nuts."
        ],
        "benefits": [
          "Improved digestion and nutrient absorption.",
          "Weight management and reduced risk of chronic diseases like diabetes and heart conditions.",
          "Enhanced energy levels and overall well-being.",
          "Better control over cravings and mood stabilization."
        ]
      },
      {
        "title": "Managing Stress for Better Health",
        "description": "Discover effective strategies to manage stress, such as meditation, exercise, adequate sleep, and fostering social connections, to improve overall well-being.",
        "ways_to_achieve": [
          "Practice mindfulness meditation or deep breathing exercises.",
          "Engage in regular physical activity or yoga.",
          "Prioritize and ensure adequate sleep of 7-9 hours per night.",
          "Spend quality time with friends, family, or support groups."
        ],
        "benefits": [
          "Reduced cortisol levels and lower risk of stress-related illnesses.",
          "Improved mood and mental clarity.",
          "Enhanced immune system function and better overall health.",
          "Stronger social support and resilience against stressors."
        ]
      },
      {
        "title": "The Importance of Adequate Sleep",
        "description": "This article explores the significance of sleep for health, discussing its role in cognitive function, immune system regulation, and overall physical and mental health.",
        "ways_to_achieve": [
          "Establish a consistent sleep schedule, going to bed and waking up at the same time daily.",
          "Create a relaxing bedtime routine to signal your body that it's time to wind down.",
          "Limit screen time before bed and create a comfortable sleep environment."
        ],
        "benefits": [
          "Improved cognitive function, concentration, and memory.",
          "Enhanced immune system and better ability to fight off infections.",
          "Lower risk of heart diseases, obesity, and mental health issues.",
          "Improved mood and emotional regulation."
        ]
      }
    ]
  };
  
  // Display health articles
  function loadArticles() {
    const articlesContainer = document.getElementById('articles');
    
    articlesData.articles.forEach(article => {
      const articleElement = createArticleElement(article);
      articlesContainer.appendChild(articleElement);
    });
  }
  
  // Create HTML element for each article
  function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.style.cssText = `
      border: 1px solid #ddd;
      margin: 20px 0;
      padding: 20px;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;
    
    const title = document.createElement('h2');
    title.textContent = article.title;
    title.style.cssText = 'color: #2c3e50; margin-bottom: 15px;';
    
    const description = document.createElement('p');
    description.textContent = article.description;
    description.style.cssText = 'color: #555; line-height: 1.6; margin-bottom: 20px;';
    
    const waysSection = document.createElement('div');
    waysSection.style.marginBottom = '20px';
    
    const waysTitle = document.createElement('h3');
    waysTitle.textContent = 'Ways to Achieve:';
    waysTitle.style.cssText = 'color: #e74c3c; margin-bottom: 10px;';
    
    const waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(way => {
      const li = document.createElement('li');
      li.textContent = way;
      li.style.cssText = 'margin-bottom: 8px; color: #555;';
      waysList.appendChild(li);
    });
    
    waysSection.appendChild(waysTitle);
    waysSection.appendChild(waysList);
    
    const benefitsSection = document.createElement('div');
    
    const benefitsTitle = document.createElement('h3');
    benefitsTitle.textContent = 'Benefits:';
    benefitsTitle.style.cssText = 'color: #27ae60; margin-bottom: 10px;';
    
    const benefitsList = document.createElement('ul');
    article.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.textContent = benefit;
      li.style.cssText = 'margin-bottom: 8px; color: #555;';
      benefitsList.appendChild(li);
    });
    
    benefitsSection.appendChild(benefitsTitle);
    benefitsSection.appendChild(benefitsList);
    
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysSection);
    articleDiv.appendChild(benefitsSection);
    
    return articleDiv;
  }
  
  // Load articles when the page loads
  document.addEventListener('DOMContentLoaded', loadArticles);
  