import { Brain, Microscope, Heart, Users, BookOpen, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="w-full py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-sans text-4xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Understanding Psilocybin
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in">
            A comprehensive exploration of psilocybin's therapeutic potential, scientific research, 
            and its role in modern mental health treatment.
          </p>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Feature - spans 2 columns on lg */}
            <div className="lg:col-span-2 bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-sans text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                    The Science Behind Psilocybin
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                    Psilocybin is a naturally occurring psychedelic compound found in certain mushroom species. 
                    When ingested, it's converted to psilocin, which acts on serotonin receptors in the brain, 
                    particularly the 5-HT2A receptor, leading to altered states of consciousness and potential 
                    therapeutic benefits.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                  <p className="text-sm text-muted-foreground">4-6 hours</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Onset</h4>
                  <p className="text-sm text-muted-foreground">20-40 minutes</p>
                </div>
              </div>
            </div>

            {/* Research Card */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4">
                <Microscope className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground mb-3">
                Clinical Research
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Recent studies show promising results for treating depression, PTSD, 
                and end-of-life anxiety.
              </p>
              <div className="text-xs text-muted-foreground bg-muted rounded-lg p-3">
                FDA designated psilocybin as "breakthrough therapy" for treatment-resistant depression
              </div>
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in">
              <div className="p-2 bg-red-100 rounded-lg w-fit mb-4">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mental Health</h3>
              <p className="text-sm text-muted-foreground">
                Potential treatment for depression, anxiety, and PTSD
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in">
              <div className="p-2 bg-blue-100 rounded-lg w-fit mb-4">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Therapy Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Used in controlled therapeutic environments with professional guidance
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in">
              <div className="p-2 bg-green-100 rounded-lg w-fit mb-4">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing research and education about safe, therapeutic use
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in">
              <div className="p-2 bg-purple-100 rounded-lg w-fit mb-4">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Safety</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous clinical protocols ensure patient safety and efficacy
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 animate-fade-in">
            <h2 className="font-sans text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center">
              Research Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">67%</div>
                <p className="text-muted-foreground">of participants showed significant improvement in depression scores</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">reported lasting positive effects 6 months post-treatment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">clinical trials currently underway worldwide</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="font-sans text-2xl font-semibold text-foreground mb-6">
                Mechanism of Action
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Psilocybin works by binding to serotonin 5-HT2A receptors in the brain, 
                  particularly in areas responsible for mood, perception, and cognition. 
                  This interaction leads to increased neural connectivity and plasticity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The compound appears to temporarily reduce activity in the brain's 
                  "default mode network," which may explain its therapeutic effects on 
                  depression and anxiety disorders.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="font-sans text-2xl font-semibold text-foreground mb-6">
                Current Legal Status
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While psilocybin remains federally illegal in the United States, 
                  several jurisdictions have decriminalized or are developing frameworks 
                  for therapeutic use under medical supervision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The FDA has granted "breakthrough therapy" designation for psilocybin-assisted 
                  therapy, expediting research and potential approval for specific medical conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
