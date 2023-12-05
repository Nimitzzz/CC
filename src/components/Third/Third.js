import React from "react";
import './Third.css';

function App() {

  return (
<div className="Thirdm" id="Thirdm">
    <div className="osh">Our Story.</div>
    <div className="Thirdmbox">
    Embarking on our deep learning internship journey at Yash Technologies on October 3 was nothing short of a fascinating dive into the realm of artificial intelligence. The initial month was an immersive experience, honing our understanding of intricate deep learning concepts and AI model architectures. The curriculum, neatly mapped out by the insightful guidance from aigents.co's deep learning roadmap (link embedded), navigated us through the intricacies of Neural Networks. From comprehending the nuances of loss and activation functions to unraveling the mathematical foundations and the mechanics of gradient descent (along with its optimized variants), the learning curve was steep yet incredibly rewarding. Delving into advanced architectures like transformers and their variants, as well as optimization techniques including padding, batch normalization, and regularization, laid a robust foundation for the exciting challenges that lay ahead in our internship journey. Looking forward to applying these newfound skills in real-world scenarios!

    Entering the second phase of our deep learning internship felt like cracking open a knowledge vault – research papers became our compass. Here, we dove deep into Language Model Architectures (LLMs), gaining a profound grasp of their intricacies. The real gem was a thoughtful comparison of various LLMs, simplifying the complex. What made this phase exciting was exposure to state-of-the-art models, immersing us in ongoing research. Actively contributing to unraveling these cutting-edge architectures was both empowering and thrilling. Now armed with insights, it was our turn to shape the evolving field of deep learning, connecting theory with practical application. Excitement brewed as we prepared to bring our unique perspective to the table.

    Under the guidance of our mentor, Mahendra Chouhan, the pivotal moment arrived when we were tasked with contemplating a use case for our deep learning endeavors. Initially drawn towards vision-related applications, we later pivoted towards the more robust and stable realm of Natural Language Processing (NLP). After careful consideration between practical applications and more whimsical projects, we approached our mentor to finalize our chosen use case. To our surprise, Mahendra already had a compelling idea in store for us, infusing an element of curiosity and anticipation into our project. The prospect of delving into this predetermined use case underscored the dynamic and collaborative nature of our internship experience.

    However, the journey took an unexpected turn. Our mentor presented a real industry challenge: streamlining the product development cycle by minimizing correspondence time between senior and junior developers. Initial solutions like documentation, introducing middle layers for code reviewing, and utilizing comments to lighten the senior developers' load crossed our minds. But, our mentor anticipated our lean towards the middle layer and introduced a curveball. The mentor explained our approach would involve utilizing a Language Model Architecture to transform our strategy. The idea was to have the LLM review code immediately upon a pull request, implementing crucial improvements based on the PR difference. This unforeseen twist injected a dose of complexity and innovation into our project, challenging us to think beyond conventional solutions.



    Following our mentor's directive, we dedicated three days to immerse ourselves in the intricacies of GitHub Actions and YAML files. This deep dive into the mechanics of automating workflows on GitHub paved the way for a seamless integration of our LLM. Concurrently, we delved into research on lightweight LLMs that could be efficiently executed. The process involved understanding the nuances of running an LLM between its training and fine-tuning stages, strategically employing tools like Google Colab, and seamlessly integrating with GitHub runners. The amalgamation of these elements laid the foundation for an efficient and dynamic code review process, propelling our project forward into a realm where theory seamlessly transitions into practical application.

    Our initial focus centered on ensuring the functionality of the commentor, a pivotal step in establishing the groundwork for deploying our LLM. I distinctly recall the surge of excitement when we christened our project as "Apprentice LM." The culmination of our first coding endeavors during the internship manifested in a prototype that looked something like this:
        </div>
</div>

  );
}

export default App;
