// chatbot.js

class DomainChatbot {
  constructor(domain) {
    this.domain = domain;
    this.knowledgeBase = this.loadKnowledgeBase(domain);
  }

  loadKnowledgeBase(domain) {
    if (domain === "Optimus Ai") {
      return {
        hello: "Hey, how are you?",
        "good morning": "Good Morning! Have a nice day.",
        "what is your name": "My name is Optimus Prime.",
      };
    }
    return {};
  }

  getResponse(message) {
    const key = message.toLowerCase().trim();

    for (const question in this.knowledgeBase) {
      if (key.includes(question)) {
        return this.knowledgeBase[question];
      }
    }

    return "Sorry, I don't have an answer to that question.";
  }
}

module.exports = DomainChatbot;
