/* ============================================================
SpeakUp — AI English Speaking Practice
script.js  |  Core application logic
   ============================================================ */

"use strict";

/* ── Practice Text Library (30 paragraphs, 200–300 words each) ── */
const TEXT_LIBRARY = [
    {
        text: "Good morning everyone. Today I will be presenting our quarterly results, and I am genuinely excited to share what our team has accomplished. Over the past three months, we have seen significant growth in all major areas of our business. Revenue increased by eighteen percent compared to the same period last year, and our customer satisfaction scores reached an all-time high of ninety-two percent. Our product team launched three new features that users have responded to very positively, and our sales team closed the largest deal in the company's history. None of this would have been possible without the dedication and resilience of every person in this room. We faced setbacks along the way. Supply chain disruptions in the second month tested our operations team, and we lost two key clients to competitors in the early part of the quarter. However, instead of retreating, we adapted. We streamlined our logistics process, strengthened our client relationships, and doubled down on the value we deliver. Looking ahead to next quarter, we have ambitious goals. We plan to expand into two new markets, hire thirty additional engineers, and launch a major product update that has been months in the making. I am confident that if we continue to work together with the same energy and focus we showed this quarter, we will not just meet our targets but exceed them. Thank you all for your continued hard work, your creativity, and your commitment to this company's mission.",
        difficulty: "Easy",
        topic: "Business Presentation",
    },
    {
        text: "Artificial intelligence is rapidly transforming the way we live and work, and its impact will only deepen in the years to come. From healthcare to transportation, from education to entertainment, intelligent systems are helping us solve complex problems faster than ever before. Machine learning algorithms can now detect diseases in medical images with accuracy that rivals experienced doctors. Self-driving vehicles are being tested on public roads across several countries. Natural language models can write essays, generate code, and hold conversations that are increasingly difficult to distinguish from those of human beings. However, with great power comes great responsibility. As AI systems become more capable, questions about bias, privacy, and accountability become more urgent. An algorithm trained on flawed data will produce flawed results, sometimes with serious consequences for real people. A facial recognition system that misidentifies individuals can lead to wrongful arrests. A hiring tool that discriminates against certain groups can deny people opportunities they rightfully deserve. We must ensure these technologies are developed ethically, with transparency and with meaningful human oversight. Regulation alone is not sufficient. Companies, researchers, and policymakers must work together to establish standards that prioritize human well-being. At the same time, we should not allow fear to paralyze progress. AI holds enormous potential to address some of humanity's greatest challenges, from climate change to poverty to disease. The goal is not to slow down innovation but to steer it wisely, so that its benefits are shared broadly and its risks are managed responsibly.",
        difficulty: "Medium",
        topic: "Technology",
    },
    {
        text: "Climate change is one of the most pressing and consequential challenges of our time, and yet the urgency it demands is still not fully reflected in our collective actions. Rising global temperatures, increasingly extreme weather events, prolonged droughts, and rapidly melting polar ice caps are not distant predictions. They are happening right now, and communities around the world are already paying the price. Coastal cities face the threat of flooding. Farmers in developing nations watch their harvests fail. Wildfires tear through forests that took centuries to grow. The scientific consensus is overwhelming and unambiguous. Human activity, primarily the burning of fossil fuels and large-scale deforestation, is driving a warming of the planet at an unprecedented rate. If current trends continue, we risk triggering feedback loops that will make reversal extraordinarily difficult. To address this crisis, we must transition to renewable energy sources with real urgency. Solar, wind, and hydroelectric power are no longer experimental technologies. They are cost-competitive alternatives that can meet our energy needs without destroying the atmosphere we all depend on. We must also rethink how we design our cities, how we grow our food, and how we move people and goods around the planet. None of these changes will come easily. They will require political will, international cooperation, and a fundamental rethinking of how we measure progress. But the cost of inaction is far greater than the cost of change. We owe it to future generations to act now, decisively and without delay.",
        difficulty: "Medium",
        topic: "Environment",
    },
    {
        text: "Public speaking is a skill that can open countless doors in your personal and professional life, yet for many people it remains one of their deepest fears. Research suggests that the fear of public speaking is more common than the fear of death, which says a great deal about how much our social perception matters to us. Whether you are addressing a boardroom of executives, a lecture hall full of students, or a large conference audience of thousands, the ability to communicate clearly and confidently makes an enormous difference. It is not simply about having good content. Delivery, pace, eye contact, posture, and vocal variety all shape how your message is received. A brilliant idea presented without conviction can fail to inspire. A simple idea delivered with energy and clarity can move people to action. The good news is that public speaking is a learnable skill. No one is born a great speaker. Even the most celebrated orators in history practiced relentlessly, sought feedback, and failed many times before finding their voice. The path to confident speaking begins with thorough preparation. Know your material deeply, not just the words on your slides. Understand your audience and tailor your message to what matters most to them. Practice out loud, not just in your head. Record yourself, watch it back, and identify moments where you could be clearer or more engaging. Most importantly, embrace the nerves. Adrenaline, channeled correctly, does not make you worse. It makes you sharper, more present, and more alive on stage. Passion, preparation, and practice are the three pillars of great oratory.",
        difficulty: "Medium",
        topic: "Communication",
    },
    {
        text: "The universe is estimated to be approximately thirteen point eight billion years old, a span of time so vast that our human minds can barely begin to comprehend it. Within this extraordinary expanse of space and time, our solar system formed roughly four and a half billion years ago from a swirling cloud of gas and dust surrounding a young star we now call the Sun. Earth, our home, is a small rocky planet orbiting that star at just the right distance to allow liquid water to exist on its surface, a condition that appears to be essential for life as we know it. For billions of years, life on Earth evolved slowly, shaped by natural selection, mass extinctions, and the constant interplay of geology, climate, and chemistry. Then, in what amounts to the final fraction of a second in cosmic time, modern human beings appeared. We developed language, built cities, invented science, and eventually looked upward to ask where we came from and whether we are alone. The universe contains an estimated two trillion galaxies, each home to hundreds of billions of stars, many of which are orbited by planets of their own. The sheer scale of existence makes it statistically difficult to believe that Earth is the only place where life has emerged. Yet despite decades of searching, we have found no confirmed evidence of life beyond our planet. That mystery, perhaps the greatest in all of science, continues to drive astronomers, biologists, and philosophers to probe the edges of human knowledge with ever-greater determination.",
        difficulty: "Hard",
        topic: "Science",
    },
    {
        text: "Education is widely regarded as the most powerful tool for personal transformation and social progress, yet billions of people around the world still lack access to quality learning opportunities. When we invest in schools, teachers, and educational infrastructure, we are not simply spending money on a social service. We are building the foundation upon which future generations will construct their lives, their careers, and their contributions to society. A well-educated population is more innovative, more productive, more resilient, and more capable of participating meaningfully in democratic governance. The link between education and economic development is well established and consistent across countries at every stage of growth. But education is not only about economic outcomes. It is about developing the capacity to think critically, to question assumptions, to understand history, and to empathize with people whose experiences differ from our own. It is about giving every child, regardless of the circumstances of their birth, the chance to discover their potential and pursue a life of purpose and dignity. Achieving this vision requires more than building classrooms. It requires training and fairly compensating teachers, who are among the most important professionals in any society. It requires curricula that are relevant, engaging, and adapted to the needs of diverse learners. It requires addressing the social and economic barriers that keep too many children out of school, from poverty and malnutrition to conflict and discrimination. Education is not a luxury reserved for the privileged. It is a fundamental human right that every child deserves, without exception and without compromise.",
        difficulty: "Easy",
        topic: "Education",
    },
    {
        text: "Leadership is one of the most studied and yet most misunderstood concepts in the world of business and beyond. Many people associate leadership with authority, with titles, with the power to give orders and make decisions. But the most effective leaders I have encountered and studied understand something quite different. Leadership is fundamentally not about being in charge. It is about taking responsibility for the people in your charge, and creating the conditions in which they can do their very best work. The best leaders I know share a set of qualities that go beyond technical expertise or strategic intelligence. They are deeply curious. They ask more questions than they answer. They are willing to say they do not know, and they create cultures in which admitting uncertainty is seen as strength rather than weakness. They are also deeply human. They take the time to understand what motivates each member of their team, what fears hold them back, and what support they need to grow. They celebrate effort, not just results. They deliver honest feedback with care and respect. They hold people accountable without humiliating them. They protect their teams from organizational chaos while exposing them to just enough challenge to promote development. None of this is easy, and no leader gets it right all the time. Leadership is a practice, not a destination. It requires constant self-reflection, a willingness to be changed by feedback, and a genuine commitment to the growth of others. Organizations that invest seriously in developing these qualities in their leaders do not just perform better. They create workplaces where people are proud to belong.",
        difficulty: "Easy",
        topic: "Leadership",
    },
    {
        text: "The global economy is more deeply interconnected today than at any point in human history, and that interconnection has profound implications for how nations, businesses, and individuals navigate an increasingly complex world. Supply chains for a single consumer product may span dozens of countries, drawing on raw materials from Africa, manufacturing expertise from Asia, software development from Europe, and distribution networks across the Americas. Financial markets respond instantaneously to political announcements, natural disasters, and shifting investor sentiment thousands of miles away. A drought in one region can raise food prices globally. A banking crisis in one country can trigger recessions on the other side of the world. This level of integration has produced extraordinary benefits. Global trade has lifted hundreds of millions of people out of extreme poverty over the past several decades. Competition has driven down costs and improved quality across virtually every category of goods and services. The flow of ideas, talent, and capital across borders has accelerated innovation in ways that no single country could have achieved in isolation. But globalization has also created new vulnerabilities. The COVID-19 pandemic exposed how heavily dependent the world had become on concentrated manufacturing in a small number of locations. Trade tensions between major powers have revealed how quickly the assumptions of open markets can be challenged by geopolitical rivalry. Inequality, both within and between nations, has deepened in ways that fuel political instability and social fracture. Managing these tensions requires not a retreat from interdependence but a more thoughtful, inclusive, and resilient approach to building the global economic architecture of the future.",
        difficulty: "Hard",
        topic: "Economics",
    },
    {
        text: "Mental health is just as important as physical health, yet it remains one of the most misunderstood, underfunded, and stigmatized areas of human well-being in societies around the world. Conditions such as anxiety, depression, bipolar disorder, and post-traumatic stress affect hundreds of millions of people globally, cutting across every age group, culture, income level, and profession. Yet too many people who are struggling suffer in silence, afraid of judgment, unsure where to turn, or simply unable to access care. The stigma surrounding mental illness is both harmful and irrational. We would never blame a person for developing diabetes or breaking a bone. Yet we routinely expect people with depression to simply cheer up, or tell those with anxiety to just relax, as if willpower alone were sufficient treatment. Mental health conditions are complex medical realities with biological, psychological, and social dimensions. They require compassionate, evidence-based care. Progress is being made. Conversations about mental health are becoming more open, particularly among younger generations who are reshaping cultural attitudes toward vulnerability and self-care. More employers are recognizing that supporting employee well-being is not only the right thing to do but also a sound business investment. More schools are integrating social and emotional learning into their curricula. But much more is needed. Mental health services must be expanded, made affordable, and integrated into primary healthcare systems. Research funding must increase. Community support structures must be strengthened. By taking mental health seriously, we can build a healthier, more compassionate, and more productive society for everyone.",
        difficulty: "Medium",
        topic: "Health",
    },
    {
        text: "Innovation is the engine that powers human progress, and throughout recorded history, breakthroughs in science, engineering, medicine, and the arts have repeatedly transformed the conditions of human life in ways that previous generations could scarcely have imagined. The invention of the printing press made knowledge accessible to ordinary people for the first time. The development of vaccines eliminated diseases that had killed millions for centuries. The rise of the internet compressed distance and made global communication instantaneous. Each of these innovations began not as a finished product but as a fragile idea in the mind of a curious and persistent individual or team. Today, the pace of technological change is accelerating at a rate that challenges our ability to adapt. Artificial intelligence, biotechnology, renewable energy, and advanced materials science are converging in ways that could address some of humanity's most pressing challenges or, if mismanaged, create new ones. The organizations and societies that thrive in this environment will be those that cultivate a genuine culture of innovation. This means tolerating failure, because failure is not the opposite of innovation but a necessary step within it. It means investing in basic research, even when the commercial applications are not immediately clear. It means creating diverse teams, because the most creative solutions emerge when people with different backgrounds and perspectives collaborate. It also means asking hard ethical questions about what we should build, not only what we can build. Innovation without wisdom is not progress. True innovation serves human beings, strengthens communities, and expands the possibilities of a life well lived.",
        difficulty: "Medium",
        topic: "Innovation",
    },
    {
        text: "The ocean covers more than seventy percent of the Earth's surface and is home to an extraordinary diversity of life, from microscopic plankton to the largest animals that have ever existed on our planet. Marine ecosystems generate roughly half of the oxygen in our atmosphere, absorb enormous quantities of carbon dioxide, regulate global temperatures, and provide food and livelihoods for billions of people around the world. Yet despite this immense importance, the health of our oceans is deteriorating at an alarming rate. Overfishing has depleted fish populations that took thousands of years to develop. Plastic pollution has created vast floating garbage patches and infiltrated even the most remote marine environments. Rising ocean temperatures caused by climate change are bleaching coral reefs that support a quarter of all known marine species. Ocean acidification, driven by the absorption of excess carbon dioxide, is weakening the shells and skeletons of countless marine organisms, disrupting food chains in ways we are only beginning to understand. Addressing these threats requires urgent and coordinated global action. We need stronger international agreements to regulate fishing practices and eliminate illegal, unreported, and unregulated fishing. We need massive reductions in plastic production and far better systems for managing plastic waste. We need to establish and properly enforce marine protected areas that allow ecosystems to recover. And above all, we need to dramatically reduce the greenhouse gas emissions that are warming and acidifying our seas. Protecting the ocean is not merely an environmental cause. It is essential to the long-term survival and well-being of human civilization itself.",
        difficulty: "Medium",
        topic: "Environment",
    },
    {
        text: "Democracy is a fragile and precious system of governance that has taken centuries of struggle, sacrifice, and reform to build, and it can be dismantled far more quickly than it was constructed. At its core, democracy rests on a simple but powerful idea: that political authority derives from the consent of the governed, and that citizens have both the right and the responsibility to participate in shaping the decisions that affect their lives. But making democracy work in practice requires much more than holding elections. It requires a free and independent press that can hold power to account. It requires an independent judiciary that applies the law without fear or favor. It requires strong civil society organizations that give voice to diverse communities. It requires educational systems that develop informed, critical, and engaged citizens. And it requires a political culture of tolerance and compromise, in which opponents are treated as rivals to be persuaded rather than enemies to be destroyed. In recent years, democratic institutions around the world have come under serious pressure. Populist movements, disinformation campaigns, the concentration of media ownership, and the erosion of trust in public institutions have all contributed to what many scholars describe as a global democratic recession. Some governments that were once considered models of democratic governance have experienced significant backsliding. The response to these pressures cannot be passive. Citizens, civil society organizations, journalists, and political leaders all have a responsibility to defend and renew the democratic institutions that protect our freedoms and our dignity. Democracy must be actively chosen, defended, and earned by every generation.",
        difficulty: "Hard",
        topic: "Politics",
    },
    {
        text: "Reading is one of the most profound and transformative habits a person can develop, and yet in an age of short videos, social media feeds, and constant digital distraction, the deep and sustained attention that reading requires has become increasingly rare. Books, whether fiction or non-fiction, long-form journalism or poetry, offer something that no other medium can quite replicate. They invite us into minds and worlds that are entirely different from our own. They slow us down. They ask us to sit with complexity, to follow an argument across many pages, to inhabit a character's experience with sustained imaginative engagement. Reading fiction, in particular, has been shown by researchers to strengthen the capacity for empathy. When we follow a character through loss, confusion, or moral struggle, we practice the mental act of seeing the world through eyes that are not our own. This is not a trivial skill. It is foundational to healthy relationships, effective leadership, and the kind of cross-cultural understanding that our divided world so urgently needs. Reading non-fiction expands our knowledge, challenges our assumptions, and equips us to engage more thoughtfully with the issues of our time. Regular reading also improves vocabulary, sharpens analytical thinking, and reduces cognitive decline in later life. None of this requires reading for hours each day. Even twenty or thirty minutes of focused reading before bed can produce meaningful benefits over time. The key is consistency and intention. Turn off the phone. Find a quiet space. Choose books that genuinely interest or challenge you. In a distracted world, the ability to read deeply is itself a form of power.",
        difficulty: "Easy",
        topic: "Literature",
    },
    {
        text: "The human brain is the most complex structure known to science, and despite decades of intensive research, it continues to confound and astonish the people who study it most carefully. Weighing roughly one and a half kilograms and containing approximately eighty-six billion neurons, each forming thousands of synaptic connections with other cells, the brain is responsible for every thought we have ever had, every emotion we have ever felt, every memory we have ever formed, and every movement our bodies have ever made. It processes vast quantities of sensory information every second, most of it beneath the level of conscious awareness, coordinating the extraordinary complexity of biological life with an efficiency that no human-engineered computer has come close to matching. Neuroscience has made remarkable strides in recent decades, aided by technologies that allow researchers to observe brain activity in real time with unprecedented precision. We now know a great deal about which regions of the brain are involved in language, memory, emotion, and decision-making. We understand much more about how sleep consolidates learning and how stress impairs cognitive function. We have developed drugs and therapies that can meaningfully alleviate the symptoms of conditions such as depression, schizophrenia, and epilepsy. Yet the deepest questions about the brain remain unanswered. How does the physical activity of neurons give rise to the subjective experience of consciousness? What is the nature of memory, identity, and selfhood? Can the mind exist independently of the body? These questions sit at the boundary between neuroscience and philosophy, and their answers, if they come at all, will likely reshape our understanding of what it means to be human.",
        difficulty: "Hard",
        topic: "Neuroscience",
    },
    {
        text: "Traveling is one of the most effective ways to expand your perspective, challenge your assumptions, and deepen your understanding of the extraordinary diversity of human life on this planet. When we leave the familiar routines and comfortable certainties of home and immerse ourselves in a different culture, we are confronted with evidence that many of the ways we organize our lives, the foods we eat, the values we prioritize, the ways we greet strangers and care for elders, are not universal truths but particular choices made by particular communities in response to particular histories and environments. That realization is both humbling and liberating. It reminds us that there are other ways of doing things, other ways of defining success, beauty, hospitality, and time. Travel also builds empathy in a very direct and embodied way. When you are lost in a foreign city and a stranger helps you without being asked, when you share a meal with a family whose language you do not speak and feel the warmth of genuine welcome, when you witness the pride and resilience of a community that has endured hardship you can barely imagine, something shifts in you permanently. You become slightly less certain that your own way is the only way, slightly more curious about the lives of people unlike yourself. This does not mean that all cultural practices are equally valid or beyond criticism. It means approaching the world with curiosity before judgment, with questions before conclusions. Every journey, whether across an ocean or across a city, has the potential to change us in ways we could not have predicted when we set out.",
        difficulty: "Medium",
        topic: "Travel",
    },
    {
        text: "The rise of social media over the past two decades has fundamentally and irreversibly transformed the way human beings communicate, consume information, form political opinions, and understand their own identities. Platforms that began as tools for connecting with friends have evolved into vast global information ecosystems that shape public discourse, influence elections, drive consumer behavior, and, increasingly, define how billions of people experience reality. The benefits are real and significant. Social media has given voice to marginalized communities that were previously ignored by mainstream media. It has enabled citizen journalism that has documented abuses of power and sparked movements for social justice. It has allowed people separated by vast distances to maintain meaningful relationships and communities of shared interest. But the costs have also become painfully clear. The algorithmic design of these platforms, optimized for engagement at all costs, tends to reward outrage over nuance, confirmation over challenge, and sensationalism over accuracy. The result is a fragmented information environment in which people increasingly inhabit entirely different factual worlds, making productive democratic conversation extraordinarily difficult. Research has consistently linked heavy social media use, particularly among adolescents, to increased rates of anxiety, depression, loneliness, and poor self-image. The spread of health misinformation, political disinformation, and coordinated harassment campaigns has caused real and measurable harm. Addressing these problems requires action at multiple levels: stronger regulation of platform algorithms and data practices, digital literacy education in schools, greater corporate accountability, and individual choices about how and how much we use these powerful and seductive tools.",
        difficulty: "Hard",
        topic: "Technology",
    },
    {
        text: "Exercise is one of the most powerful and well-researched tools available to us for improving health, extending life, and enhancing the quality of our daily experience. The evidence is clear, consistent, and overwhelming. Regular physical activity reduces the risk of cardiovascular disease, type two diabetes, certain cancers, and osteoporosis. It strengthens the immune system, improves sleep quality, and enhances sexual health. Perhaps most surprisingly to those who think of exercise as primarily a physical activity, it is also one of the most effective treatments available for depression and anxiety, often comparable in its effects to medication, without the side effects. The mechanisms are multiple. Exercise increases the production of endorphins and other neurochemicals that regulate mood. It reduces levels of the stress hormone cortisol. It promotes neuroplasticity, the brain's ability to form new connections, which underlies learning, memory, and resilience. It also creates a sense of agency and accomplishment that builds self-efficacy over time. The most common barrier people cite is lack of time. But research suggests that even short bouts of activity, as little as ten or fifteen minutes several times a day, can produce meaningful health benefits. You do not need an expensive gym membership or specialized equipment. Walking, cycling, swimming, dancing, gardening, and playing with children all count. The most important thing is to find activities you genuinely enjoy, because enjoyment is the strongest predictor of consistency. Movement is not punishment. It is one of the fundamental pleasures of being alive in a body, and it is available, in some form, to almost everyone.",
        difficulty: "Easy",
        topic: "Health",
    },
    {
        text: "Space exploration has captured the human imagination for as long as we have looked up at the night sky and wondered what lies beyond the horizon of our world. From the first tentative rocket experiments of the early twentieth century to the extraordinary moment in July nineteen sixty-nine when Neil Armstrong set foot on the surface of the Moon, and through the decades of robotic exploration that have followed, our species has demonstrated a persistent and irresistible drive to push the boundaries of the known. The scientific returns from space exploration have been enormous. We have learned about the formation of our solar system, the nature of other planets, the behavior of stars, and the large-scale structure of the universe. Technologies originally developed for space missions, from satellite navigation to memory foam to water purification systems, have found applications that benefit everyday life on Earth. Today, we stand at the beginning of what many believe will be a new golden age of space exploration. Missions to Mars are being planned by both national space agencies and private companies. Telescopes of unprecedented power are revealing galaxies that formed just a few hundred million years after the Big Bang. The prospect of detecting signs of life on other worlds, once a topic reserved for science fiction, is now the subject of serious scientific investigation. But space exploration also raises important questions about priorities. In a world where billions of people lack access to clean water, adequate healthcare, and basic economic security, how do we justify the enormous costs of sending people and machines into space? The answer, I believe, is that exploration and the knowledge it generates are not luxuries. They are expressions of who we are as a species.",
        difficulty: "Medium",
        topic: "Space",
    },
    {
        text: "Entrepreneurship is one of the most demanding, exhilarating, and ultimately meaningful paths a person can choose to follow. It demands a rare combination of qualities: the creativity to see opportunity where others see only obstacles, the courage to act in the face of profound uncertainty, the resilience to absorb failure and keep moving, and the leadership to attract, inspire, and retain talented people who are willing to believe in a vision that has not yet been proven. Building a company from nothing is not a glamorous experience, at least not most of the time. It means working long hours on problems that feel simultaneously trivial and overwhelming. It means making consequential decisions with incomplete information and accepting responsibility for the outcomes. It means hearing the word no from investors, customers, and potential partners far more often than the word yes, and learning to use every rejection as data rather than defeat. It means managing your own psychology as carefully as you manage your team and your finances, because the founder's state of mind is one of the most powerful variables in any startup's trajectory. The rewards, when they come, are real. There is something uniquely satisfying about creating an organization that solves a genuine problem, that employs talented people doing meaningful work, and that generates value in the world that would not have existed without your decision to begin. But the deepest reward of entrepreneurship is not financial. It is the transformation that happens inside the founder. The person who survives the full experience of building something from scratch, with all its setbacks and breakthroughs, emerges fundamentally different: more capable, more self-aware, and more alive.",
        difficulty: "Hard",
        topic: "Business",
    },
    {
        text: "Music is one of the oldest and most universal forms of human expression, found in every culture that has ever existed on Earth, from the earliest prehistoric societies to the most complex modern civilizations. It is a language without words, capable of conveying emotions and experiences that resist description in ordinary speech. A minor chord can evoke a sadness that no sentence can quite capture. A driving rhythm can ignite energy that spreads from one person to an entire crowd in seconds. A lullaby can calm an infant, and the same melody heard decades later can return an adult to the exact emotional texture of childhood. The relationship between music and the human brain is profound and far-reaching. Research has shown that listening to music engages more areas of the brain simultaneously than almost any other activity. Learning to play a musical instrument restructures the brain in ways that enhance language processing, mathematical reasoning, fine motor coordination, and emotional regulation. Music therapy has demonstrated effectiveness in treating conditions ranging from depression and anxiety to the cognitive symptoms of dementia. Music also plays a vital social function. It creates shared identity, marks important life transitions from birth to death, and enables communities to express collective grief, joy, protest, or celebration in ways that forge powerful bonds. Every culture on Earth has its own rich musical traditions, each reflecting a unique history and a unique way of making meaning from sound. In a world that can feel increasingly fragmented and isolating, music reminds us of our shared humanity and our deep need for beauty and connection.",
        difficulty: "Medium",
        topic: "Arts",
    },
    {
        text: "The food we eat is one of the most fundamental expressions of our culture, our values, our relationship with the natural world, and our understanding of health. Yet in the modern industrialized food system, these connections have been almost entirely severed for most people. Food arrives at supermarkets in plastic packaging, its origin unknown, its production hidden, its true cost to the environment and to the people who grew it invisible. Industrial agriculture has achieved something genuinely remarkable: it has made calories extraordinarily cheap and accessible in wealthy countries. But it has done so at a very high price. The sector is one of the leading contributors to greenhouse gas emissions globally, responsible for roughly a third of all human-caused climate impact. It is a major driver of deforestation, particularly in tropical regions where ancient forests are cleared for cattle ranching and soy cultivation. It consumes vast quantities of freshwater and degrades soil quality through the overuse of synthetic fertilizers and pesticides. It has also produced a global health crisis, in which cheap, highly processed food contributes to epidemic rates of obesity, diabetes, and cardiovascular disease. None of this means that we should romanticize a past in which food was scarce and famine was a constant threat. The challenge is to build a food system that is simultaneously productive enough to nourish a growing world population and sustainable enough to do so without destroying the ecological foundations on which all life depends. This will require innovation in agriculture, changes in policy, investment in sustainable farming practices, and, ultimately, a shift in how each of us thinks about the relationship between what we eat and the world we inhabit.",
        difficulty: "Medium",
        topic: "Food and Environment",
    },
    {
        text: "Friendship is one of life's most valuable and most underappreciated treasures. We live in a culture that celebrates romantic love and family bonds in countless films, books, and songs, but rarely gives the same attention to the profound importance of deep, enduring friendships. Yet research in psychology and medicine consistently shows that strong social connections are among the most powerful predictors of happiness, health, and longevity. People with close friendships live longer, recover more quickly from illness, report higher levels of life satisfaction, and demonstrate greater resilience in the face of adversity than those who are socially isolated. True friendship is not the same as having a large social network or a high number of followers on a digital platform. It is characterized by genuine mutual care, by the willingness to show up in difficult moments, by honesty that is delivered with love rather than judgment, and by the kind of ease and trust that only develops through shared experience over time. Good friends challenge us to be better, not by criticizing our failures but by believing in our potential. They celebrate our successes with genuine joy, unclouded by envy. They hold space for our pain without trying to rush us past it. Building and maintaining these kinds of friendships requires intention and effort. In the busyness of adult life, it is easy to let important relationships drift through neglect. Friendships require regular investment: showing up, reaching out, being present, and choosing people over convenience again and again. In a world that is faster and more connected than ever but also, paradoxically, lonelier than ever, investing in authentic human connection may be one of the wisest choices we can make.",
        difficulty: "Easy",
        topic: "Life Skills",
    },
    {
        text: "Quantum computing represents one of the most fascinating and potentially transformative frontiers in the history of technology, promising computational capabilities that would make even our most powerful classical supercomputers appear primitive by comparison. To understand why, it helps to understand the fundamental difference between classical and quantum computation. Classical computers store and process information using bits, each of which represents either a zero or a one. Every calculation, no matter how complex, ultimately reduces to a series of these binary operations. Quantum computers, by contrast, use quantum bits, or qubits, which exploit the counterintuitive properties of quantum mechanics to represent zero, one, or any superposition of both states simultaneously. This property, combined with other quantum phenomena such as entanglement and interference, allows quantum computers to explore many possible solutions to a problem at the same time, rather than evaluating them one by one. The potential implications of this capability are enormous. Problems in cryptography that would take classical computers longer than the age of the universe to solve could potentially be cracked by a sufficiently powerful quantum computer in hours. Drug discovery processes that currently take years of laboratory experimentation could be dramatically accelerated by quantum simulations of molecular behavior. Optimization problems in logistics, finance, and energy management could be solved with a speed and precision that current technology cannot approach. We are still in the early stages of this technology. Current quantum computers are noisy, error-prone, and limited in the number of qubits they can sustain. But the pace of progress is remarkable, and the competition among leading technology companies and national governments to achieve quantum advantage is intensifying. The age of quantum computing is approaching, and its arrival will change the landscape of science, security, and industry in profound ways.",
        difficulty: "Hard",
        topic: "Technology",
    },
    {
        text: "The arts, broadly understood to encompass painting, sculpture, theatre, dance, literature, film, and music, play a role in human societies that is both more important and more difficult to quantify than is commonly acknowledged. When governments face budget pressures and must make difficult choices about where to direct public resources, arts funding is often among the first casualties, dismissed as a luxury that society cannot afford in times of hardship. This reasoning reflects a profound misunderstanding of what the arts do and what their loss costs us. The arts are not decorative additions to an already complete human life. They are among the primary means by which individuals and communities make sense of their experiences, process collective trauma, transmit cultural knowledge across generations, and imagine futures that do not yet exist. They create economic value, through creative industries that generate billions in revenue and employment, as well as the cultural tourism they attract. They contribute to the health of communities by providing spaces of shared meaning and beauty in environments that might otherwise feel indifferent or hostile. They develop in practitioners and audiences alike the capacity for sustained attention, empathy, and aesthetic judgment that are valuable across every domain of life. Perhaps most importantly, the arts ask questions that no other human activity quite addresses. What does it mean to be alive in this particular place and time? How should we understand suffering, love, mortality, and the possibility of transcendence? These are not optional questions. They are at the heart of what it means to be human, and the arts are among our most important tools for grappling with them.",
        difficulty: "Medium",
        topic: "Arts",
    },
    {
        text: "Sleep is the single most effective thing we can do to reset the health of our brain and body every twenty-four hours, and yet it is the behavior that modern society most readily sacrifices when we feel under pressure. We live in a culture that often celebrates the willingness to work through the night, to get by on four or five hours, to treat rest as a weakness rather than a biological necessity. This attitude has serious consequences. Sleep deprivation, which scientists define as getting less than seven hours per night on a regular basis, is linked to a dramatically increased risk of a wide range of serious health conditions, including cardiovascular disease, obesity, type two diabetes, and certain cancers. It impairs immune function, reducing the body's ability to fight off infections. It disrupts the hormonal systems that regulate hunger, contributing to overeating and weight gain. In the brain, insufficient sleep impairs attention, memory consolidation, emotional regulation, and decision-making in ways that accumulate over time and can be difficult to perceive from the inside. One of the most troubling aspects of sleep deprivation is that chronically sleep-deprived people consistently overestimate their own functional capacity. They believe they are coping fine when objective tests reveal significant impairment. During deep sleep, the brain's glymphatic system actively clears toxic waste products, including the amyloid plaques associated with Alzheimer's disease. Getting enough high-quality sleep is therefore not merely a matter of feeling rested. It is one of the most powerful investments you can make in your long-term cognitive health, emotional stability, physical resilience, and overall quality of life.",
        difficulty: "Medium",
        topic: "Health",
    },
    {
        text: "The digital divide, the gap between those who have reliable access to modern information and communication technology and those who do not, is one of the most significant and yet least visible forms of inequality in the contemporary world. In an economy and society that increasingly operates online, lacking internet access is not merely an inconvenience. It means being excluded from digital financial services and remote banking. It means being unable to apply for jobs that require online applications, or to participate in the remote work arrangements that have become increasingly standard. It means that children cannot access the vast educational resources available on the internet, or complete homework assignments that assume a household has broadband connectivity. It means being unable to access telehealth services or government benefits that have moved to digital platforms. It means, in a very real sense, being marginalized from full participation in modern civic and economic life. The divide operates at multiple levels. Within wealthy nations, significant gaps exist between urban and rural areas, and between higher and lower-income households. Between nations, the disparities are even more stark. In many parts of sub-Saharan Africa and South Asia, the majority of the population has no regular internet access at all. Addressing the digital divide requires action on multiple fronts simultaneously. Infrastructure investment must extend reliable broadband into underserved communities. Devices must be made affordable. Digital literacy education must be integrated into school curricula and adult education programs. And digital public services must be designed with the needs of less experienced users in mind. Technology has the potential to be a powerful equalizing force. But that potential will only be realized if we make deliberate choices to ensure that its benefits reach everyone.",
        difficulty: "Hard",
        topic: "Technology",
    },
    {
        text: "Philosophy has accompanied the human journey from its earliest recorded history, asking questions that refuse to yield to simple answers and returning to them with new tools and perspectives in every age. What is the nature of reality? What can we truly know, and how can we know it? What makes an action right or wrong? What is justice, and what does a just society look like? Does human life have an inherent purpose or meaning, or is meaning something we must create for ourselves? These questions can seem abstract and remote from the practical concerns of everyday life, and yet they shape, often invisibly, the assumptions on which our legal systems, our political institutions, our educational philosophies, and our personal moral choices are built. Every time we make a judgment about fairness, every time we evaluate the credibility of a claim, every time we ask whether an end justifies its means, we are engaging in philosophical reasoning, whether we recognize it as such or not. The study of philosophy does not offer the comfort of settled answers. But it offers something arguably more valuable: the development of intellectual virtues that serve us well across every domain of life. The philosophical habit of examining assumptions rather than accepting them uncritically, of distinguishing what we know from what we merely believe, of following an argument wherever it leads regardless of whether we find its conclusion comfortable, is one of the most powerful cognitive tools a person can develop. In a world saturated with confident claims and competing ideologies, the philosophical disposition of careful, humble, and rigorous inquiry is more necessary than ever.",
        difficulty: "Hard",
        topic: "Philosophy",
    },
    {
        text: "Water is the foundation of all known life, the substance without which no biological process can occur and no human civilization has ever flourished. The history of humanity is, in large part, a history of our relationship with water: the rivers beside which our earliest cities grew, the irrigation systems that made agriculture possible in arid lands, the oceans that both separated and connected civilizations across millennia. Today, water remains the most essential resource on Earth, and its management is one of the defining challenges of the twenty-first century. Despite covering approximately seventy percent of the planet's surface, only a tiny fraction of the world's water is freshwater suitable for human consumption, and much of that is locked in glaciers and ice caps or stored deep underground. Already, more than two billion people live in areas experiencing high water stress, meaning that demand for freshwater consistently exceeds sustainable supply. Agriculture accounts for roughly seventy percent of global freshwater withdrawals, and as populations grow and diets shift toward more water-intensive foods, this demand will only increase. Climate change is compounding the crisis. Changing precipitation patterns are making wet regions wetter and dry regions drier. Glaciers that have supplied freshwater to billions of people for thousands of years are retreating. Extreme weather events are contaminating water supplies and destroying infrastructure. Solving the global water challenge will require a combination of technological innovation, such as more efficient irrigation systems and affordable desalination, smarter governance and pricing mechanisms that reflect the true value of water, significant investment in water infrastructure in developing countries, and international cooperation to manage the rivers, lakes, and aquifers that cross national borders.",
        difficulty: "Medium",
        topic: "Environment",
    },
    {
        text: "Empathy, the capacity to understand and share the emotional experience of another person, is one of the most powerful and most neglected qualities in public and professional life. We tend to praise intelligence, efficiency, and decisiveness in our leaders, our institutions, and ourselves, while treating empathy as a soft or secondary quality, valuable in personal relationships perhaps but not particularly relevant to the serious business of running organizations or making policy. This is a serious mistake. Research in psychology, neuroscience, and organizational behavior consistently demonstrates that empathy is not merely a nicety but a functional necessity for effective leadership, productive teamwork, sound decision-making, and the building of trust. Leaders who understand how their decisions will affect the people they lead make better decisions. Negotiators who can genuinely see the situation from the other party's perspective reach better agreements. Healthcare professionals who practice empathic communication achieve better patient outcomes. Teams in which members feel genuinely understood by each other collaborate more effectively and handle conflict more constructively. Empathy is also the foundation of justice. Our legal systems, our social policies, and our ethical frameworks are all built, implicitly or explicitly, on some capacity to consider the interests and experiences of others. When that capacity atrophies, injustice follows. Developing empathy is not simply a matter of being a nice person. It is a cognitive and emotional skill that can be practiced and strengthened. It requires the discipline of genuine listening, the humility to suspend your own frame of reference, and the imagination to enter into experiences very different from your own. In a world marked by deep divisions along lines of class, culture, race, and politics, the deliberate cultivation of empathy may be among the most urgent tasks before us.",
        difficulty: "Easy",
        topic: "Life Skills",
    },
    {
        text: "Biodiversity, the extraordinary variety of life on Earth spanning millions of species of animals, plants, fungi, and microorganisms, is not merely an aesthetic wonder or a scientific curiosity. It is the living infrastructure that makes all human life possible. Healthy ecosystems provide clean air and water, fertile soil, pollination of crops, regulation of climate, and resistance to disease. The more diverse an ecosystem, the more resilient it is to disturbance, whether from climate shifts, invasive species, or the removal of individual components. When diversity collapses, so does resilience, often with consequences that cascade through entire food webs and affect human communities that depend on healthy ecosystems for their livelihoods and survival. Biodiversity loss is currently occurring at a rate that many scientists describe as the sixth mass extinction in the history of life on Earth, and the first to be driven primarily by the actions of a single species. The destruction and fragmentation of natural habitats is the leading cause, driven by agriculture, urban expansion, logging, and infrastructure development. Overexploitation of wildlife through hunting, fishing, and the illegal wildlife trade is another major factor. Pollution degrades the water, air, and soil that species depend on. Invasive species, introduced accidentally or deliberately by human activity, outcompete or prey upon native species. And climate change is beginning to fundamentally alter the conditions to which species are adapted, pushing many toward extinction faster than they can evolve or migrate. Reversing these trends will require genuinely transformative changes in how we use land, how we manage our seas, how we power our economies, and ultimately how we understand our own place within the community of life on this planet.",
        difficulty: "Hard",
        topic: "Environment",
    },
    {
        text: "Personal finance is one of the most practically important subjects a person can study, yet it is conspicuously absent from the curricula of most schools around the world. Millions of people reach adulthood without understanding the basic principles of budgeting, saving, investing, debt management, or insurance, and the consequences of this financial illiteracy are far-reaching and deeply inequitable. The foundational principle of personal financial health is straightforward, even if it is psychologically difficult: spend less than you earn, save the difference, and invest that saving in assets that will grow over time. Compound interest, the process by which the returns on an investment themselves generate returns, is one of the most powerful forces in personal finance. A person who begins investing a modest sum each month at age twenty-five will, by the time they reach retirement, accumulate significantly more wealth than someone who invests a much larger amount beginning at age forty-five, simply because of the additional time available for compounding to work. This is why financial advisors emphasize starting early, even when the amounts seem small. Equally important is the management of debt. Not all debt is equally harmful. A mortgage at a low interest rate, used to purchase an asset that tends to appreciate over time, is fundamentally different from high-interest consumer credit card debt, which can trap borrowers in cycles of compounding obligation that are very difficult to escape. Understanding this distinction, and making borrowing decisions accordingly, can make an enormous difference to a person's financial trajectory over a lifetime. Financial literacy is not a luxury. It is a life skill that deserves the same priority in education as reading, writing, and mathematics.",
        difficulty: "Medium",
        topic: "Finance",
    },
    {
        text: "Critical thinking is the discipline of analyzing information carefully, questioning assumptions rigorously, and arriving at conclusions through reasoned judgment rather than habit, emotion, or social pressure. In an era defined by information overload, algorithmic curation, deliberate disinformation, and the constant temptation to confuse confidence with accuracy, it may be the single most important intellectual skill a person can develop. The foundations of critical thinking include the ability to identify the source of a claim and evaluate its credibility, to distinguish between evidence and assertion, to recognize logical fallacies and rhetorical manipulation, and to hold conclusions tentatively, open to revision in light of new evidence. These are not natural or automatic capacities. They are learned habits that require practice and cultivation, and they can atrophy without regular use. One of the greatest obstacles to critical thinking is the very human tendency toward confirmation bias, the inclination to seek out information that supports what we already believe and to dismiss or minimize information that challenges it. Social media algorithms, designed to maximize engagement by showing us content we are likely to agree with, powerfully reinforce this tendency, creating echo chambers in which our existing views are amplified rather than tested. Developing genuine critical thinking requires the uncomfortable discipline of actively seeking out perspectives that challenge your own, of sitting with uncertainty rather than rushing to the reassurance of premature certainty, and of being willing to change your mind when the evidence demands it. This is not weakness. It is intellectual integrity, and it is essential to both individual flourishing and the health of democratic societies that depend on citizens capable of making informed and independent judgments.",
        difficulty: "Medium",
        topic: "Education",
    },
];

/* ── DOM References ───────────────────────────────────────── */
const $ = (id) => document.getElementById(id);

const generateBtn = $("generateBtn");
const startCameraBtn = $("startCameraBtn");
const stopCameraBtn = $("stopCameraBtn");
const startSpeakBtn = $("startSpeakBtn");
const stopSpeakBtn = $("stopSpeakBtn");
const fullscreenBtn = $("fullscreenBtn");

const textDisplay = $("textDisplay");
const wordCountBadge = $("wordCountBadge");
const difficultyBadge = $("difficultyBadge");
const transcriptText = $("transcriptText");
const liveDot = $("liveDot");
const statusPill = $("statusPill");

const cameraVideo = $("cameraVideo");
const cameraOverlay = $("cameraOverlay");
const cameraStatus = $("cameraStatus");
const cameraRec = $("cameraRec");

const timerMin = $("timerMin");
const timerSec = $("timerSec");
const timerBar = $("timerBar");

const liveAccuracy = $("liveAccuracy");
const liveWords = $("liveWords");
const liveStreak = $("liveStreak");

const modalOverlay = $("modalOverlay");
const ringFill = $("ringFill");
const ringPct = $("ringPct");
const statTime = $("statTime");
const statWords = $("statWords");
const statAccuracy = $("statAccuracy");
const statWPM = $("statWPM");
const modalFeedback = $("modalFeedback");
const tryAgainBtn = $("tryAgainBtn");
const closeModalBtn = $("closeModalBtn");

const errorToast = $("errorToast");
const toastMsg = $("toastMsg");

/* ── Application State ────────────────────────────────────── */
let state = {
    currentEntry: null, // selected text object
    cameraStream: null, // MediaStream
    recognition: null, // SpeechRecognition instance
    isListening: false,
    timerInterval: null,
    elapsedSeconds: 0,
    spokenText: "", // full accumulated transcript
    interimText: "", // live interim text
    wordResults: [], // per-word comparison
    maxTimerSec: 240, // cap for the progress bar (4 min for 200-300 word texts)
};

/* ── Utility: Show Toast ──────────────────────────────────── */
function showToast(msg, duration = 3500) {
    toastMsg.textContent = msg;
    errorToast.classList.add("visible");
    setTimeout(() => errorToast.classList.remove("visible"), duration);
}

/* ── Utility: Set Status ──────────────────────────────────── */
function setStatus(label, type = "") {
    statusPill.textContent = `● ${label}`;
    statusPill.className = "status-pill";
    if (type) statusPill.classList.add(type);
}

/* ── 1. Generate Random Text ──────────────────────────────── */
generateBtn.addEventListener("click", () => {
    // Pick a random entry (different from current)
    let entry;
    do {
        entry = TEXT_LIBRARY[Math.floor(Math.random() * TEXT_LIBRARY.length)];
    } while (entry === state.currentEntry && TEXT_LIBRARY.length > 1);

    state.currentEntry = entry;
    state.spokenText = "";
    state.interimText = "";
    state.wordResults = [];

    const words = entry.text.split(/\s+/);

    // Update badges
    wordCountBadge.textContent = `${words.length} words`;
    difficultyBadge.textContent = `${entry.difficulty} · ${entry.topic}`;

    // Render text with word spans
    textDisplay.innerHTML = "";
    const para = document.createElement("p");
    para.id = "practiceText";

    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.className = "word";
        span.id = `word-${i}`;
        span.textContent = word;
        para.appendChild(span);
        if (i < words.length - 1) para.appendChild(document.createTextNode(" "));
    });

    textDisplay.appendChild(para);
    textDisplay.classList.add("has-text");

    // Reset transcript
    transcriptText.textContent = "Your spoken words will appear here...";

    // Reset score sidebar
    liveAccuracy.textContent = "—";
    liveWords.textContent = "—";
    liveStreak.textContent = "—";

    // Enable speaking button
    startSpeakBtn.disabled = false;

    // Reset timer display
    resetTimer(false);

    setStatus("Ready", "");
    generateBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.95)" },
            { transform: "scale(1)" },
        ],
        { duration: 200 },
    );
});

/* ── 2. Camera ────────────────────────────────────────────── */
startCameraBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
        state.cameraStream = stream;
        cameraVideo.srcObject = stream;
        cameraVideo.classList.add("visible");
        cameraOverlay.classList.add("hidden");
        cameraStatus.textContent = "ON";
        cameraStatus.classList.add("on");
        startCameraBtn.disabled = true;
        stopCameraBtn.disabled = false;
    } catch (err) {
        showToast("Camera permission denied. Please allow camera access.");
    }
});

stopCameraBtn.addEventListener("click", () => {
    if (state.cameraStream) {
        state.cameraStream.getTracks().forEach((t) => t.stop());
        state.cameraStream = null;
    }
    cameraVideo.srcObject = null;
    cameraVideo.classList.remove("visible");
    cameraOverlay.classList.remove("hidden");
    cameraStatus.textContent = "OFF";
    cameraStatus.classList.remove("on");
    cameraRec.classList.remove("visible");
    startCameraBtn.disabled = false;
    stopCameraBtn.disabled = true;
});

/* ── 3. Timer ─────────────────────────────────────────────── */
function startTimer() {
    state.elapsedSeconds = 0;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.elapsedSeconds++;
        updateTimerDisplay();
        // Animate progress bar
        const pct = Math.min((state.elapsedSeconds / state.maxTimerSec) * 100, 100);
        timerBar.style.width = pct + "%";
    }, 1000);
}

function stopTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
}

function resetTimer(resetDisplay = true) {
    stopTimer();
    if (resetDisplay) {
        state.elapsedSeconds = 0;
        updateTimerDisplay();
        timerBar.style.width = "0%";
    }
}

function updateTimerDisplay() {
    const m = Math.floor(state.elapsedSeconds / 60);
    const s = state.elapsedSeconds % 60;
    timerMin.textContent = String(m).padStart(2, "0");
    timerSec.textContent = String(s).padStart(2, "0");
}

/* ── 4. Speech Recognition ────────────────────────────────── */
function setupSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
        showToast(
            "Speech Recognition is not supported in this browser. Try Chrome.",
        );
        return null;
    }

    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.maxAlternatives = 1;

    rec.onstart = () => {
        state.isListening = true;
        liveDot.classList.add("active");
        cameraRec.classList.add("visible");
        setStatus("Recording", "recording");
        startTimer();
        stopSpeakBtn.disabled = false;
        startSpeakBtn.disabled = true;
    };

    rec.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
                finalTranscript += result[0].transcript + " ";
            } else {
                interimTranscript += result[0].transcript;
            }
        }

        if (finalTranscript) {
            state.spokenText += finalTranscript;
        }

        // Display combined transcript
        const display = state.spokenText + interimTranscript;
        transcriptText.textContent = display.trim() || "Listening...";

        // Compare and highlight words
        compareAndHighlight(state.spokenText + interimTranscript);
    };

    rec.onerror = (event) => {
        if (event.error === "not-allowed") {
            showToast("Microphone access denied. Please allow microphone access.");
        } else if (event.error === "network") {
            showToast("Network error. Please check your connection.");
        } else if (event.error !== "aborted") {
            showToast(`Speech recognition error: ${event.error}`);
        }
    };

    rec.onend = () => {
        // Auto-restart if still supposed to be listening
        if (state.isListening) {
            try {
                rec.start();
            } catch (e) {
                /* already starting */
            }
        }
    };

    return rec;
}

startSpeakBtn.addEventListener("click", () => {
    if (!state.currentEntry) {
        showToast("Please generate a text first!");
        return;
    }

    state.spokenText = "";
    state.interimText = "";
    transcriptText.textContent = "Listening...";

    state.recognition = setupSpeechRecognition();
    if (!state.recognition) return;

    try {
        state.recognition.start();
    } catch (e) {
        showToast("Could not start speech recognition.");
    }
});

stopSpeakBtn.addEventListener("click", () => {
    if (state.recognition) {
        state.isListening = false;
        state.recognition.stop();
        state.recognition = null;
    }
    stopTimer();
    liveDot.classList.remove("active");
    cameraRec.classList.remove("visible");
    setStatus("Done", "");
    startSpeakBtn.disabled = false;
    stopSpeakBtn.disabled = true;

    // Show score card
    if (state.currentEntry) {
        setTimeout(() => showScoreCard(), 600);
    }
});

/* ── 5. Word Comparison & Highlighting ───────────────────── */
function normalizeWord(w) {
    return w.toLowerCase().replace(/[^a-z0-9']/g, "");
}

function compareAndHighlight(spokenRaw) {
    if (!state.currentEntry) return;

    const originalWords = state.currentEntry.text.split(/\s+/);
    const spokenWords = spokenRaw.trim().split(/\s+/).filter(Boolean);

    let correctCount = 0;
    let streak = 0;
    let maxStreak = 0;

    originalWords.forEach((orig, i) => {
        const span = $(`word-${i}`);
        if (!span) return;

        if (i < spokenWords.length) {
            const match = normalizeWord(orig) === normalizeWord(spokenWords[i]);
            span.className = "word " + (match ? "correct" : "wrong");
            if (match) {
                correctCount++;
                streak++;
                maxStreak = Math.max(maxStreak, streak);
            } else {
                streak = 0;
            }
        } else if (i === spokenWords.length) {
            span.className = "word current";
        } else {
            span.className = "word";
        }
    });

    const spoken = Math.min(spokenWords.length, originalWords.length);
    const accuracy = spoken > 0 ? Math.round((correctCount / spoken) * 100) : 0;

    // Update live scores
    liveAccuracy.textContent = accuracy + "%";
    liveWords.textContent = spokenWords.length;
    liveStreak.textContent = maxStreak;

    // Color code accuracy
    if (accuracy >= 80) liveAccuracy.style.color = "var(--green)";
    else if (accuracy >= 50) liveAccuracy.style.color = "var(--yellow)";
    else liveAccuracy.style.color = "var(--red)";
}

/* ── 6. Score Card ────────────────────────────────────────── */
function showScoreCard() {
    if (!state.currentEntry) return;

    const originalWords = state.currentEntry.text.split(/\s+/);
    const spokenWords = state.spokenText.trim().split(/\s+/).filter(Boolean);

    let correctCount = 0;
    const compareLen = Math.min(spokenWords.length, originalWords.length);

    for (let i = 0; i < compareLen; i++) {
        if (normalizeWord(originalWords[i]) === normalizeWord(spokenWords[i])) {
            correctCount++;
        }
    }

    const accuracy =
        spokenWords.length > 0
            ? Math.round((correctCount / Math.max(spokenWords.length, 1)) * 100)
            : 0;
    const totalSec = state.elapsedSeconds;
    const wpm =
        totalSec > 0 ? Math.round((spokenWords.length / totalSec) * 60) : 0;

    // Format time
    const timeStr =
        totalSec < 60
            ? `${totalSec}s`
            : `${Math.floor(totalSec / 60)}m ${totalSec % 60}s`;

    // Update ring
    const circumference = 314; // 2 * π * 50
    const offset = circumference - (accuracy / 100) * circumference;
    ringFill.style.strokeDashoffset = offset;
    ringPct.textContent = accuracy + "%";

    // Color ring by accuracy
    if (accuracy >= 80) ringFill.style.stroke = "var(--green)";
    else if (accuracy >= 50) ringFill.style.stroke = "var(--yellow)";
    else ringFill.style.stroke = "var(--red)";

    // Stats
    statTime.textContent = timeStr;
    statWords.textContent = spokenWords.length;
    statAccuracy.textContent = accuracy + "%";
    statWPM.textContent = wpm;

    // Feedback message
    let feedback;
    if (accuracy >= 90) {
        feedback = `🌟 Excellent performance! You nailed ${accuracy}% of the words with great clarity. Your speaking fluency is impressive — keep pushing at this level!`;
    } else if (accuracy >= 75) {
        feedback = `👍 Great job! ${accuracy}% accuracy is solid. Focus on a few tricky words you stumbled on, and you'll be presentation-ready very soon.`;
    } else if (accuracy >= 55) {
        feedback = `💪 Good effort! ${accuracy}% accuracy shows you're on the right track. Try slowing down slightly and enunciating each word more clearly.`;
    } else if (spokenWords.length === 0) {
        feedback = `🎤 No speech was detected. Make sure your microphone is enabled and try speaking clearly into it.`;
    } else {
        feedback = `🔄 Keep practicing! ${accuracy}% accuracy means there's room to grow. Read the text a few times before speaking, and try again!`;
    }
    modalFeedback.textContent = feedback;

    // Show modal
    modalOverlay.classList.add("visible");
}

tryAgainBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("visible");
    resetTimer(true);
    state.spokenText = "";
    transcriptText.textContent = "Your spoken words will appear here...";
    liveAccuracy.textContent = "—";
    liveWords.textContent = "—";
    liveStreak.textContent = "—";
    liveAccuracy.style.color = "";
    // Re-render text without highlights
    if (state.currentEntry) {
        const words = state.currentEntry.text.split(/\s+/);
        words.forEach((_, i) => {
            const span = $(`word-${i}`);
            if (span) span.className = "word";
        });
    }
    startSpeakBtn.disabled = false;
    stopSpeakBtn.disabled = true;
    setStatus("Ready", "");
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("visible");
});

// Close modal on overlay click
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
});

/* ── 7. Fullscreen Mode ───────────────────────────────────── */
// Create floating exit button
const exitBtn = document.createElement("button");
exitBtn.className = "btn btn-danger fullscreen-exit";
exitBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0 2-2h3M3 16h3a2 2 0 0 0 2 2v3"/></svg> Exit Fullscreen`;
exitBtn.style.cssText = "position:fixed;top:16px;right:16px;z-index:999;";
document.body.appendChild(exitBtn);

fullscreenBtn.addEventListener("click", () => toggleFullscreen(true));
exitBtn.addEventListener("click", () => toggleFullscreen(false));

function toggleFullscreen(enter) {
    document.body.classList.toggle("fullscreen-mode", enter);
    fullscreenBtn.textContent = enter ? "Exit Fullscreen" : "Fullscreen";
    fullscreenBtn.onclick = () => toggleFullscreen(!enter);
}

/* ── Browser Fullscreen API (optional) ───────────────────── */
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove("fullscreen-mode");
    }
});

/* ── Keyboard Shortcuts ───────────────────────────────────── */
document.addEventListener("keydown", (e) => {
    // Space = generate text (when not in input)
    if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        if (!state.isListening) generateBtn.click();
    }
    // Escape = close modal or exit fullscreen
    if (e.code === "Escape") {
        if (modalOverlay.classList.contains("visible")) {
            modalOverlay.classList.remove("visible");
        } else if (document.body.classList.contains("fullscreen-mode")) {
            toggleFullscreen(false);
        }
    }
    // Enter = start/stop speaking
    if (e.code === "Enter" && e.target === document.body) {
        if (!state.isListening && !startSpeakBtn.disabled) startSpeakBtn.click();
        else if (state.isListening) stopSpeakBtn.click();
    }
});

/* ── Init ─────────────────────────────────────────────────── */
(function init() {
    // Check browser support
    const hasSpeech = !!(
        window.SpeechRecognition || window.webkitSpeechRecognition
    );
    const hasCamera = !!(
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia
    );

    if (!hasSpeech) {
        showToast(
            "⚠ Speech Recognition not supported. Use Google Chrome for best experience.",
        );
        startSpeakBtn.disabled = true;
        startSpeakBtn.title = "Not supported in this browser";
    }
    if (!hasCamera) {
        startCameraBtn.disabled = true;
        startCameraBtn.title = "Camera not supported";
    }

    setStatus("Idle", "");
    console.log(
        `%cSpeakUp initialized ✓ — ${TEXT_LIBRARY.length} texts loaded`,
        "color:#00e5ff;font-weight:bold;",
    );
    console.log(
        "Shortcuts: [Space] Generate  |  [Enter] Start/Stop Speaking  |  [Escape] Close/Exit",
    );
})();
