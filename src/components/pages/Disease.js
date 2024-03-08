import React from 'react';
import '../../App.css';
import './disease.css';

export default function AnalysisResult() {
  return (
    <body>
      <div class="serv-title">disease</div>
      <div className="container">
        <h1>Analysis Result</h1>
        <div className="result">
          <p className="disorder-label">Your disorder is:</p>
          <div className="model-output">
            {/* Placeholder for model output */}
          </div>
        </div>
      </div>
    <div class="container">
      <h1>Things You Should Know</h1>
      <div class="medication-info ocd-bg">
        <h2>Obsessive-Compulsive Disorder (OCD)</h2>
        <p>Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by intrusive thoughts (obsessions) and repetitive behaviors or rituals (compulsions). Common medications used to treat OCD include:</p>
        <ul>
          <li>Serotonin reuptake inhibitors (SRIs)</li>
          <li>Tricyclic antidepressants (TCAs)</li>
          <li>Antipsychotic medications</li>
          <li>Benzodiazepines (for anxiety symptoms)</li>
        </ul>
        <p>To avoid exacerbating OCD symptoms, individuals may benefit from practicing stress management techniques, participating in therapy (such as cognitive-behavioral therapy), maintaining a healthy lifestyle, and avoiding triggers that worsen symptoms.</p>
      </div>
      <div class="medication-info adhd-bg">
        <h2>Attention-Deficit/Hyperactivity Disorder (ADHD)</h2>
        <p>Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by difficulties with attention, hyperactivity, and impulsivity. Common medications used to treat ADHD include:</p>
        <ul>
          <li>Stimulant medications (e.g., methylphenidate, amphetamine derivatives)</li>
          <li>Non-stimulant medications (e.g., atomoxetine, guanfacine)</li>
        </ul>
        <p>To manage ADHD symptoms, individuals may find it helpful to create structured routines, break tasks into smaller steps, practice mindfulness and relaxation techniques, and engage in regular physical activity.</p>
      </div>
      <div class="medication-info ptsd-bg">
        <h2>Post-Traumatic Stress Disorder (PTSD)</h2>
        <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. Common medications used to treat PTSD include:</p>
        <ul>
          <li>Selective serotonin reuptake inhibitors (SSRIs)</li>
          <li>Other antidepressants</li>
          <li>Antianxiety medications</li>
          <li>Prazosin (for nightmares)</li>
        </ul>
        <p>To reduce the risk of PTSD, individuals can focus on building resilience through healthy coping mechanisms, seeking social support, practicing relaxation techniques, and addressing traumatic experiences through therapy.</p>
      </div>
      <div class="medication-info depression-bg">
        <h2>Depression</h2>
        <p>Depression is a mood disorder characterized by persistent feelings of sadness, loss of interest or pleasure, and other symptoms that interfere with daily functioning. Common medications used to treat depression include:</p>
        <ul>
          <li>Selective serotonin reuptake inhibitors (SSRIs)</li>
          <li>Serotonin-norepinephrine reuptake inhibitors (SNRIs)</li>
          <li>Tricyclic antidepressants (TCAs)</li>
          <li>Monoamine oxidase inhibitors (MAOIs)</li>
        </ul>
        <p>To prevent and manage depression, individuals may benefit from maintaining a healthy lifestyle (including regular exercise and a balanced diet), seeking support from loved ones and mental health professionals, practicing stress reduction techniques, and avoiding alcohol and drug use.</p>
      </div>
    </div>
  </body>
  );
}

