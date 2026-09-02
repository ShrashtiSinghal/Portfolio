import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Github, Linkedin, Mail, User, ArrowRight } from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: "Hi! I'm Shrashti's assistant. She's an AI/ML Architect and Head of AI at Culinda Inc., building agentic AI systems for healthcare and regulated enterprise. What would you like to know?",
            options: ['What does she build?', 'Explore her work', 'Her AI/ML stack', 'Get in touch']
        }
    ]);
    const [currentStep, setCurrentStep] = useState('initial');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const scrollToSection = (id) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const reply = (content, options, delay = 900) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { type: 'bot', content, options }]);
        }, delay);
    };

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { type: 'user', content: option }]);

        if (option === 'What does she build?') {
            reply(
                "Shrashti architects enterprise GenAI and agentic AI systems — 10+ shipped to production across ITSM, contract lifecycle management, HRMS, asset management and converged security intelligence. Recent results: 94% ticket routing accuracy on VeloDesk, 70% less contract review time on VeloContract, and an 89% MTTD reduction on DarkEye across 15+ hospital security teams.",
                ['Explore her work', 'Her AI/ML stack', 'Get in touch']
            );
        } else if (option === 'Explore her work') {
            reply(
                "Taking you to her projects — 26 of them, led by the Velozent product suite. Click any card for the full story, or filter by 'Velo Platform' to see the product family.",
                ['What does she build?', 'Her AI/ML stack', 'Get in touch'],
                600
            );
            scrollToSection('projects');
        } else if (option === 'Her AI/ML stack') {
            reply(
                "Multi-agent orchestration with LangGraph, CrewAI and the OpenAI Agents SDK; frontier and open-source LLMs (GPT-4o, Claude, Qwen 2.5, DeepSeek-R1, Mistral); RAG and fine-tuning with Q-LoRA; and MLOps/LLMOps on Databricks, Vertex AI and Azure — with governance aligned to NIST AI RMF and the EU AI Act.",
                ['See the full skills list', 'Her experience', 'Get in touch']
            );
        } else if (option === 'See the full skills list') {
            reply("Scrolling to the skills section.", ['Her experience', 'Explore her work', 'Get in touch'], 500);
            scrollToSection('skills');
        } else if (option === 'Her experience') {
            reply(
                "12+ years in AI/ML. Currently Head of AI and AI Engineering Manager at Culinda Inc. (since 2021). Before that she founded NeedyData (acquired 2021), co-founded DermaAI, Recroid and MagixDB, advised Yale on ChestIA, and spent six years in ML engineering at Intel Deutschland.",
                ['Explore her work', 'Her AI/ML stack', 'Get in touch']
            );
            scrollToSection('experience');
        } else if (option === 'Get in touch') {
            reply("Happy to help you connect. First, may I have your name?");
            setCurrentStep('name');
        } else if (option === 'View GitHub') {
            window.open('https://github.com/ShrashtiSinghal', '_blank', 'noopener,noreferrer');
            reply("I've opened her GitHub. Anything else?", ['What does she build?', 'Read her writing', 'Get in touch'], 700);
        } else if (option === 'Connect on LinkedIn') {
            window.open('https://www.linkedin.com/in/shrashti-singhal-1869166b/', '_blank', 'noopener,noreferrer');
            reply("I've opened her LinkedIn — a personalised note always helps.", ['What does she build?', 'View GitHub', 'Get in touch'], 700);
        } else if (option === 'Read her writing') {
            window.open('https://medium.com/@shrashtisinghal', '_blank', 'noopener,noreferrer');
            reply("I've opened her Medium — she writes for Towards Data Science and Towards AI on LLMs and agentic architectures.", ['What does she build?', 'View GitHub', 'Get in touch'], 700);
        }
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = { type: 'user', content: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        if (currentStep === 'name') {
            setFormData({ ...formData, name: inputValue });
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: `Nice to meet you, ${inputValue}! What's the best email address to reach you at?`
                }]);
                setCurrentStep('email');
            }, 1000);
        } else if (currentStep === 'email') {
            setFormData({ ...formData, email: inputValue });
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: "Perfect. And finally, briefly, what would you like to discuss?"
                }]);
                setCurrentStep('message');
            }, 1000);
        } else if (currentStep === 'message') {
            const updatedFormData = { ...formData, message: inputValue };
            setFormData(updatedFormData);

            const subject = encodeURIComponent(`Portfolio enquiry from ${updatedFormData.name}`);
            const body = encodeURIComponent(
                `Name: ${updatedFormData.name}\nEmail: ${updatedFormData.email}\n\nMessage:\n${inputValue}`
            );

            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: `Thanks, ${updatedFormData.name}! I've opened your email app with the message ready to send — just hit send and it lands in Shrashti's inbox. If nothing opened, write to shrashtisinghal@gmail.com directly.`,
                    options: ['Connect on LinkedIn', 'View GitHub', 'Explore her work']
                }]);
                window.location.href = `mailto:shrashtisinghal@gmail.com?subject=${subject}&body=${body}`;
                setCurrentStep('completed');
            }, 900);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            {/* Chat Window */}
            {isOpen && (
                <div className="glass-card mb-4 w-80 sm:w-96 h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-border bg-background/95 backdrop-blur-xl animate-fade-in-up transition-all duration-300">

                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30">
                                    <video
                                        src="/chatbot-icon.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover scale-150"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-teal-600"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Shrashti's Assistant</h3>
                                <p className="text-xs text-teal-100">Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                                    ? 'bg-teal-500 text-white rounded-tr-none'
                                    : 'bg-muted text-foreground rounded-tl-none border border-border'
                                    }`}>
                                    {msg.content}
                                </div>
                                {msg.options && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {msg.options.map((opt, optIdx) => (
                                            <button
                                                key={optIdx}
                                                onClick={() => handleOptionClick(opt)}
                                                className="text-xs font-semibold bg-background border border-teal-500/30 text-teal-600 hover:bg-teal-50 px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-start">
                                <div className="bg-muted p-3 rounded-2xl rounded-tl-none border border-border flex gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    {(currentStep === 'name' || currentStep === 'email' || currentStep === 'message') && (
                        <div className="p-3 border-t border-border bg-background/50 backdrop-blur-sm">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-foreground placeholder-muted-foreground"
                                    autoFocus
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="bg-teal-500 hover:bg-teal-600 text-white p-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Launcher Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center"
            >
                {!isOpen && (
                    <span className="absolute right-16 bg-black text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hidden sm:block">
                        Let's chat!
                        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black transform rotate-45"></div>
                    </span>
                )}
                <div className={`w-14 h-14 rounded-full shadow-brutal flex items-center justify-center transition-all duration-300 overflow-hidden ${isOpen ? 'bg-red-500 rotate-90' : 'bg-gradient-to-r from-teal-500 to-orange-500 hover:scale-110'
                    }`}>
                    {isOpen ? (
                        <X className="w-7 h-7 text-white" />
                    ) : (
                        <video
                            src="/chatbot-icon.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-150"
                        />
                    )}
                </div>
            </button>
        </div>
    );
};

export default ChatBot;
