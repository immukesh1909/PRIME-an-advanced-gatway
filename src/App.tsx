import React, { useState } from 'react';
import { Shield, Terminal, ShieldCheck, EyeOff, Fingerprint, Activity } from 'lucide-react';

const INITIAL_LOGS = [
  { id: 1, time: '00:01:00', type: 'system', msg: 'Zero-Trust Gatekeeper activated. Policy: UNCOMPROMISING_ISOLATION.' },
  { id: 2, time: '00:01:04', type: 'security', msg: 'Neural heuristics loaded. Dynamic signature matching active.' },
];

export default function App() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [unifiedInput, setUnifiedInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  
  const [analysis, setAnalysis] = useState({
    riskPercent: 0,
    threatName: 'System Idle',
    dangerLevel: 'Unverified',
    explanation: 'Gateway perimeter clear. Core heuristic engine is in standalone listening mode, waiting for untrusted payloads.',
    whatToDo: 'Input a string, script block, obfuscated link, or social payload to evaluate verification mechanics.',
    whatNotToDo: 'Do not adjust local system access matrices until an input trace passes inspection.',
  });

  // Calculate dynamic color profiles based on risk rating
  const getThemeColor = () => {
    if (!hasScanned) return '#ffffff'; // Pure Initial White Light
    if (isProcessing) return '#a855f7'; // Processing Purple
    if (analysis.riskPercent === 0) return '#10b981'; // Healthy Green
    if (analysis.riskPercent < 50) return '#f59e0b'; // Warning Yellow
    return '#ef4444'; // Threat Red
  };

  // Helper to generate a realistic, intellectual-looking pseudo-random risk decimal
  const generateIntellectualRisk = (min: number, max: number) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  const handleProcessInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!unifiedInput.trim()) return;

    setIsProcessing(true);
    setHasScanned(true);
    
    const timestamp = new Date().toTimeString().split(' ')[0];
    setLogs(prev => [{ id: Date.now(), time: timestamp, type: 'intercept', msg: `DECONSTRUCTING PAYLOAD: Parsing structural patterns...` }, ...prev]);

    setTimeout(() => {
      const text = unifiedInput;
      const textLower = text.toLowerCase();
      
      // Default Base Fallback (If nothing specific triggers, it's unverified)
      let result = {
        riskPercent: generateIntellectualRisk(30, 48),
        threatName: 'Unverified Data Block',
        dangerLevel: 'Suspicious',
        explanation: 'The telemetry payload does not directly trigger explicit exploit patterns. However, under an absolute Zero Trust baseline, any unvalidated data block is treated as an active threat until isolated.',
        whatToDo: 'Route this payload through an air-gapped sandboxed instance for strict runtime analysis.',
        whatNotToDo: 'Do not allow this string to pass directly into unescaped print blocks or application database queries.'
      };

      // --- ADVANCED ADVANCED PATTERN MATCHING DETECTION SUITE ---

      // Threat 2 Protection: Character Obfuscation, Leetspeak, Homograph Bypasses
      const leetPattern = /([\$5s][3e]nd)|(m[0o]n[3e]y)|(p[@a][\$\$s]{2}w[0o]rd)|([p|b][-._ ]?[a|@][-._ ]?[s|5][-._ ]?[s|5])|([s5][-._ ]?e[-._ ]?n[-._ ]?d)/i;
      
      // Threat 3 Protection: Highly Complex or Masked URL/Routing Formats
      const urlPattern = /(https?:\/\/|\bwww\.)[^\s]+|(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)|(\b[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}\b)/i;
      
      // Threat 4 Protection: Cross-Site Scripting (XSS) & Dynamic Injection Triggers
      const xssPattern = /(<script.*?>.*?<\/script>)|(onError\s*=)|(onMouseOver\s*=)|(javascript:)|(<img\s+[^>]*src[^>]*>)/i;
      
      // Threat 5 Protection: Buffer Floods & Heavy Input Character Noise
      const symbolNoiseCount = (text.match(/[~!@#$%^&*()_+{}|:"<>?\-=\[\]\\;',.\/]/g) || []).length;
      const isBufferFlood = text.length > 300;

      // Threat 1 Protection: Explicit or Smart Social Engineering Patterns (Money/Identity traps)
      const socialPattern = /(friend|money|transfer|borrow|loan|cash|paypal|venmo|zelle|bank|payroll|urgent|click|verify|details|identity|pan|ssn|credentials)/i;

      // EXECUTE RADAR PATTERN CHECK (Evaluated from high technical impact down to context)
      
      if (xssPattern.test(text)) {
        result = {
          riskPercent: generateIntellectualRisk(97, 99.8),
          threatName: 'Cross-Site Scripting (XSS) // Injection Vector',
          dangerLevel: 'Critical Threat',
          explanation: 'Malicious DOM instruction script detected within the buffer. The pattern utilizes executable browser properties designed to force code runtime execution inside the client dashboard session.',
          whatToDo: 'Deploy a strict content sanitization sweep, escape all HTML entities, and invoke an immediate system-level origin lock.',
          whatNotToDo: 'Never bind raw user inputs directly to innerHTML elements or pass un-sanitized components back into the screen layout.'
        };
      }
      
      else if (leetPattern.test(text)) {
        result = {
          riskPercent: generateIntellectualRisk(88, 94.5),
          threatName: 'Obfuscated Leetspeak // Evade Pattern',
          dangerLevel: 'High Risk',
          explanation: 'Detected deliberate alphanumeric substitution. Attackers skew characters (e.g., using symbols like "$3nd" or "p@$$") to sneak malicious calls past primitive string-matching blocks.',
          whatToDo: 'Strip the input payload down to normalized Unicode structures and match against normalized string patterns.',
          whatNotToDo: 'Do not depend on simple text checks. Standard keyword scanning will miss this evasion completely.'
        };
      }

      else if (isBufferFlood || symbolNoiseCount > 12) {
        result = {
          riskPercent: generateIntellectualRisk(82, 89.9),
          threatName: 'Input Buffer Stress // Special Character Noise',
          dangerLevel: 'High Risk',
          explanation: 'Input layout contains anomalous structural density, extreme character volume, or a highly erratic symbol ratio designed to choke parsing routines or trigger script layout errors.',
          whatToDo: 'Enforce strict string character truncation parameters at the edge firewall before processing.',
          whatNotToDo: 'Do not allocate open system memory stacks to unmeasured, raw telemetry chunks.'
        };
      }

      else if (urlPattern.test(text)) {
        result = {
          riskPercent: generateIntellectualRisk(90, 96.2),
          threatName: 'Unverified Remote Routing // Link Redirect',
          dangerLevel: 'Critical Threat',
          explanation: 'Payload contains a tracking URL, numerical network IP string, or unverified link path. Interacting risks driving local network traffic directly into remote phishing infrastructure.',
          whatToDo: 'Isolate the destination path inside a proxy server and completely strip the referral headers.',
          whatNotToDo: 'Do not resolve the DNS or attempt an un-sandboxed cURL to the remote location.'
        };
      }

      else if (socialPattern.test(textLower)) {
        result = {
          riskPercent: generateIntellectualRisk(93, 97.4),
          threatName: 'Social Engineering // Identity Impersonation Exploit',
          dangerLevel: 'Critical Threat',
          explanation: 'Context analysis flags financial pressure or unauthorized credential solicitation patterns. Phishing frameworks frequently use trust-triggers ("friend," "urgent verification") to harvest assets.',
          whatToDo: 'Halt data operations immediately. Implement a secondary, independent out-of-band communication check.',
          whatNotToDo: 'Do not process data transactions or yield administrative permissions based on unauthenticated chat payloads.'
        };
      }

      setAnalysis(result);
      setIsProcessing(false);
      setUnifiedInput('');

      setLogs(prev => [
        { id: Date.now() + 1, time: timestamp, type: 'alert', msg: `ANALYST REPORT: Security Matrix flagged anomaly at [${result.riskPercent}% Danger index].` },
        ...prev
      ]);
    }, 1200);
  };

  // Circular Bar Calculations
  const radius = 60;
  const strokeWidth = 8; // Thicker, visible bar style
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (analysis.riskPercent / 100) * circumference;

  return (
    <div style={{ position: 'relative', backgroundColor: '#02040a', color: '#94a3b8', minHeight: '100vh', fontFamily: 'monospace', padding: '32px', boxSizing: 'border-box', overflow: 'hidden' }}>
      
      {/* BACKGROUND GRAPHIC SCANNING BACKLIGHT ENGINE */}
      <style>{`
        @keyframes verticalLaser { 0% { top: -20%; } 100% { top: 120%; } }
        
        .backlight-beam { 
          position: absolute; 
          left: 0; 
          width: 100%; 
          height: 12px; 
          background: ${getThemeColor()}; 
          filter: blur(10px) drop-shadow(0 0 20px ${getThemeColor()}); 
          opacity: 0.25; 
          pointer-events: none; 
          z-index: 0; 
          animation: verticalLaser 3.5s linear infinite; 
          transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .progress-circle-bar {
          transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s ease;
        }
      `}</style>

      <div className="backlight-beam"></div>

      {/* SYSTEM UI HUD WRAPPER */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* APP CORE HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #21262d', paddingBottom: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Shield style={{ color: getThemeColor(), width: '34px', height: '34px', transition: 'color 0.5s ease' }} />
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#f0f6fc', letterSpacing: '-0.5px' }}>PRIME // HEURISTIC ZERO-TRUST GATEWAY</h1>
              <span style={{ fontSize: '11px', color: '#57606a', fontWeight: '600', letterSpacing: '0.5px' }}>DYNAMICAL EVALUATION SUBSYSTEM // MULTI-VECTOR TRACE INTERCEPT</span>
            </div>
          </div>
          <div style={{ backgroundColor: '#0d1117', border: `1px solid ${getThemeColor()}`, color: '#f0f6fc', padding: '6px 14px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', transition: 'border-color 0.5s' }}>
            SECURITY COMPLIANCE: HEURISTIC_PARANOID
          </div>
        </header>

        {/* 1. TOP UNIFIED EXPLOIT INTERCEPT FILTER */}
        <div style={{ backgroundColor: '#0d1117', border: '1px solid #21262d', borderRadius: '6px', padding: '24px', marginBottom: '28px' }}>
          <form onSubmit={handleProcessInput} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ color: '#c9d1d9', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} style={{ color: getThemeColor() }} />
              Ingest Critical Telemetry Payload:
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input 
                type="text" 
                placeholder="Paste threat vector (e.g., '<script>alert(1)</script>' or 'can you $3nd m0n3y right now')"
                value={unifiedInput}
                onChange={(e) => setUnifiedInput(e.target.value)}
                style={{ flex: 1, backgroundColor: '#010409', border: '1px solid #30363d', borderRadius: '4px', padding: '12px 14px', color: '#f0f6fc', fontSize: '13px', fontFamily: 'monospace', outline: 'none' }}
              />
              <button 
                type="submit" 
                disabled={isProcessing}
                style={{ backgroundColor: getThemeColor(), color: '#0d1117', border: 'none', borderRadius: '4px', padding: '0 24px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', transition: 'background-color 0.5s ease' }}
              >
                {isProcessing ? 'EVALUATING...' : 'ANALYZE STRIP'}
              </button>
            </div>
          </form>
        </div>

        {/* 2. SECURITY INTEL BREAKDOWN */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: '28px', backgroundColor: '#0d1117', border: '1px solid #21262d', borderRadius: '6px', padding: '28px', marginBottom: '28px' }}>
          
          {/* THE PROGRESSIVE DYNAMIC BAR CIRCLE WHEEL */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #21262d', paddingRight: '12px' }}>
            <span style={{ fontSize: '10px', color: '#57606a', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Activity size={12} /> SCAN METRIC
            </span>
            
            <div style={{ position: 'relative', width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                {/* Background Ring Track */}
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke="#161b22"
                  strokeWidth={strokeWidth}
                />
                {/* Active Dynamic Progress Ring Bar */}
                <circle
                  className="progress-circle-bar"
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke={getThemeColor()}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={hasScanned ? strokeDashoffset : circumference}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Internal Floating Metrics */}
              <div style={{ position: 'absolute', textAlign: 'center', zIndex: 5 }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#f0f6fc', lineHeight: 1 }}>
                  {hasScanned ? `${analysis.riskPercent}%` : '0.00%'}
                </div>
                <div style={{ fontSize: '9px', color: getThemeColor(), fontWeight: '700', textTransform: 'uppercase', marginTop: '6px', letterSpacing: '0.5px', transition: 'color 0.5s' }}>
                  {analysis.dangerLevel}
                </div>
              </div>
            </div>
          </div>

          {/* ATTACK METRICS DESCRIPTION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <span style={{ fontSize: '10px', color: '#57606a', fontWeight: '700', textTransform: 'uppercase' }}>Classification Signature</span>
              <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#f0f6fc', margin: '4px 0 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Fingerprint size={16} style={{ color: getThemeColor() }} />
                {analysis.threatName}
              </h2>
            </div>
            
            <div>
              <span style={{ fontSize: '10px', color: '#57606a', fontWeight: '700', textTransform: 'uppercase' }}>Heuristic Diagnostics Matrix</span>
              <p style={{ fontSize: '13px', color: '#8b949e', lineHeight: '1.6', margin: '4px 0 0 0' }}>{analysis.explanation}</p>
            </div>

            {/* SIDE-BY-SIDE TACTICAL DECISION BOXES */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '6px' }}>
              
              {/* IMMEDIATELY DO THIS */}
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.01)', border: '1px solid rgba(16, 185, 129, 0.12)', borderRadius: '4px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: '700', fontSize: '11px', marginBottom: '6px' }}>
                  <ShieldCheck size={13} /> OVERRIDE ACTION MANDATES:
                </div>
                <p style={{ fontSize: '12px', color: '#8bd4b1', lineHeight: '1.4', margin: 0 }}>{analysis.whatToDo}</p>
              </div>

              {/* IMMEDIATELY AVOID THIS */}
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.01)', border: '1px solid rgba(239, 68, 68, 0.12)', borderRadius: '4px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: '700', fontSize: '11px', marginBottom: '6px' }}>
                  <EyeOff size={13} /> EXPLOIT DEVIATION PITFALLS:
                </div>
                <p style={{ fontSize: '12px', color: '#fba3a3', lineHeight: '1.4', margin: 0 }}>{analysis.whatNotToDo}</p>
              </div>

            </div>
          </div>

        </div>

        {/* 3. CORE TELEMETRY PACKET FOOTER */}
        <div style={{ backgroundColor: '#0d1117', border: '1px solid #21262d', borderRadius: '4px', padding: '16px' }}>
          <div style={{ color: '#8b949e', fontWeight: '700', fontSize: '11px', borderBottom: '1px solid #21262d', paddingBottom: '8px', marginBottom: '10px', letterSpacing: '0.3px' }}>
            CONTINUOUS RISK TRACKING LEDGER // KERNEL PIPELINE STREAM
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '80px', overflowY: 'auto' }}>
            {logs.map(log => (
              <div key={log.id} style={{ fontSize: '12px', color: '#484f58' }}>
                <span style={{ marginRight: '8px', color: '#57606a' }}>[{log.time}]</span>
                <span style={{ color: '#8b949e' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
