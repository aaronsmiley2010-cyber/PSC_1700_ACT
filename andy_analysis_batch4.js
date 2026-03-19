window.ANDY_ANALYSIS_BATCH4 = (() => {
  const rows = `
227|Reykja|Dog|Wellness and fecal recheck|1|A routine follow-up where alternatives were not really the issue.|The conversation focused on normal exam findings and preventive follow-up rather than a meaningful affordability branch.|nooption
232|Frazier|Dog|Vomiting and bloody diarrhea triage|1|The veterinarian staged fluids, medication, and possible hospitalization instead of treating the case as all-or-nothing.|The plan used blood work to judge dehydration, outpatient support when reasonable, and escalation if the clinical picture worsened.|options,staged,risk,min,rep
315|Tilly|Dog|Itching, flea control, and chronic comfort review|1|This was mostly chronic-management discussion rather than a cost-sensitive negotiation.|The visit covered itching, flea control, and arthritis-style comfort management without a strong alternative-path conflict.|nooption
316|Romero|Dog|Diarrhea and straining with travel timing pressure|1|A straightforward outpatient GI plan fit the case, with travel logistics shaping the visit more than budget did.|The veterinarian used bland diet, probiotic support, fluids, and follow-up boundaries while working around the owner's flight timing.|nooption,barrier
317|Romero|Dog|Diarrhea and straining with travel timing pressure|1|A straightforward outpatient GI plan fit the case, with travel logistics shaping the visit more than budget did.|The veterinarian used bland diet, probiotic support, fluids, and follow-up boundaries while working around the owner's flight timing.|nooption,barrier
318|Emma|Cat|Upper respiratory and herpes-flare discussion|1|The veterinarian used a stepwise plan with empiric treatment before heavier escalation.|The discussion paired doxycycline and supportive care with reasoning about likely herpes involvement and when to reassess.|options,staged,risk
321|Stevie|Dog|Arthritis management while on chronic Rimadyl|1|The veterinarian linked monitoring to future medication changes rather than forcing a single path.|Blood work was used as a checkpoint for NSAID safety, with alternative arthritis treatment left open if liver or kidney values changed.|options,staged,risk
324|Quade|Dog|Skin flare and boarding vaccine visit|1|This was mostly a routine maintenance visit rather than a meaningful affordability conversation.|The veterinarian handled allergy management, boarding-related vaccines, and topical care without a strong lower-cost pivot.|nooption
327|Pippen|Dog|Nail injury, weight loss, and intermittent pain|1|The veterinarian separated what needed workup now from what could wait for recurrence.|The plan used send-out blood work and reserved x-rays for if the painful episodes returned, which reads as staged rather than padded care.|options,staged
330|Mr. Little|Cat|Hyperthyroid recheck with rectal bleeding concern|1|The visit centered on ruling out a more serious problem rather than exploring cheaper alternatives.|The veterinarian recommended blood work and exam follow-up while explaining concern for rectal disease or a mass.|nooption,risk
333|Ollie|Dog|Puppy vaccine sequence and neuter timing|1|Routine preventive care still involved branching decisions about timing and risk.|The veterinarian discussed vaccine sequence, Bordetella and Lepto timing, and neuter timing as staged preventive decisions.|options,staged,risk
344|Lottie|Dog|Recurrent urinary infection follow-up|1|The veterinarian used a narrower first step before moving to culture-level workup.|The plan emphasized urine testing now, a longer antibiotic course, and culture later if recurrence continued.|options,staged
345|Cooper|Dog|Sensitive stomach and dental-vaccine planning|1|The veterinarian combined supportive GI care with a narrower testing plan.|The visit used fluids, anti-nausea support, diet guidance, and optional send-out blood work rather than an immediate heavy workup.|options,staged,risk
348|Max|Cat|Polyuria and polydipsia workup|1|The veterinarian started with core diagnostics and left treatment intensity open until results clarified the cause.|Blood and urine testing came first, with later diabetes-specific decisions framed after the workup.|options,staged
354|Spooky|Cat|Weight loss and vomiting workup|1|The conversation staged medical reasoning instead of jumping straight to a final diagnosis.|The veterinarian used blood work first and explained how thyroid, kidney, or GI disease might sort out from there.|options,staged,risk
373|Wrigley|Dog|Possible acute blindness and hypertension workup|1|This is a strong example of stepwise diagnostic reasoning under uncertainty.|The veterinarian used blood pressure first, then broader blood work, while explaining concern for hypertension, kidney disease, or Cushing's.|options,staged,risk,rep
406|Tuxedo|Cat|Hyperthyroid follow-up and lab timing|1|The visit mainly reaffirmed needed monitoring rather than building a lower-cost branch.|The veterinarian explained why thyroid recheck and possible broader lab work mattered given dosing uncertainty at home.|nooption,risk
407|River Rose|Dog|Acute abdominal pain, panting, and diarrhea|1|The veterinarian framed the case as a staged GI or foreign-body workup rather than a single fixed answer.|The conversation moved through abdominal exam, stool context, and next-step diagnostics while explaining the concern behind escalation.|options,staged,risk
408|Goose|Dog|Preventive scheduling and vaccine synchronization|1|Routine prevention still included visible scheduling and money tradeoffs.|The veterinarian discussed how to synchronize vaccines and prevention timing, with cost and convenience both made visible.|options,money,staged
409|Comet|Dog|Diet, neuter timing, and vaccine counseling|1|The veterinarian used prevention and diet choices as a staged decision set rather than a hard script.|The discussion covered grain-inclusive diet guidance, neuter timing, and vaccine timing with explanation of downstream risk.|options,staged,risk
410|Bandit and Hershey|Cat|Dental timing and pre-dental blood work logistics|1|The veterinarian made timing and cost visible while keeping the medical need intact.|The owner and veterinarian discussed whether to do blood work now or closer to the dental date, balancing price, timing, and medical relevance.|options,money,pay,staged,barrier
411|Ellie|Dog|Recurrent urinary issues and recessed-vulva planning|1|The veterinarian narrowed the plan to what was most useful first.|Urine testing and infection control came first, while weight loss was positioned as the initial step before any corrective surgery.|options,staged,risk,min
412|Bailey|Dog|Routine vaccines and tag-cost discussion|1|A routine preventive visit with explicit money language but no real care-path conflict.|The veterinarian discussed vaccine timing and county-tag cost context, but the visit did not turn into a meaningful alternative-plan negotiation.|money,nooption
413|Dexter|Dog|Senior exam with flea or skin concern and handling issues|1|The visit was dominated by owner confusion and handling logistics, not an affordability branch.|The available transcript focused on fleas, behavior around restraint, and visit logistics more than on material treatment alternatives.|nooption,barrier
454|Lola|Dog|Arthritis follow-up with Solensia timing question|1|The veterinarian showed restraint by supporting watchful timing instead of automatic treatment.|The discussion allowed skipping today's injection and monitoring for when the clinical need clearly returned.|options,staged,min
455|Sejon|Cat|Constipation and stool recheck|1|This was mostly a stable follow-up rather than a spectrum-of-care conversation.|The plan centered on continuing current management and diet support without a real affordability branch.|nooption
468|Gypsy|Dog|Dental planning with same-day blood work savings|1|The veterinarian made one practical money-saving move explicit inside a broader care plan.|The visit discussed dental cleaning timing and how same-day blood work could reduce duplicate cost or visits.|options,money,staged
470|Oliver|Cat|Urination changes and inappropriate elimination workup|1|The veterinarian staged common-cause diagnostics rather than jumping ahead.|The plan used blood and urine testing first while explaining how thyroid, kidney, or urinary disease could fit the picture.|options,staged,risk
473|Benny|Dog|Ear irritation and congestion visit|1|The visit included modest diagnostic branching rather than a hard single-path recommendation.|The veterinarian used ear cytology and treatment discussion to sort out the likely cause without a major cost conflict.|options
478|Coco|Dog|Wellness, vaccine, and spay-cost discussion|1|The veterinarian made cost visible without letting it dominate the medical reasoning.|The visit covered vaccine choices, Lepto discussion, and spay planning with direct reference to expected price and timing.|options,money,staged
480|Simba|Cat|Anal-sac versus parasite concern with poor appetite|1|The veterinarian worked through a confusing history and still built a staged outpatient plan.|The discussion sorted prior home medications, appetite decline, and anal-sac concern while using conservative next steps first.|options,staged,risk,barrier
498|Candy|Dog|Annual exam with dental estimate planning|1|This is a practical cost-logistics case more than a disagreement case.|The veterinarian discussed dental timing, pre-dental blood work, and how to sequence those steps efficiently and affordably.|options,money,pay,staged
499|Raine|Dog|Rabies update and skin follow-up|1|A routine maintenance visit where alternatives were not the issue.|The plan focused on vaccine update and continuing local skin care after improvement.|nooption
501|Charli|Cat|Annual exam and fecal recheck|1|This was a straightforward preventive visit with no meaningful cost-of-care pivot.|The conversation covered overdue routine care and fecal follow-up without a significant alternative-path discussion.|nooption
504|Eva and Dakota|Dog|Vaccine reactions and split-shot planning|1|The veterinarian created a safer preventive path instead of insisting on one format.|The discussion covered splitting vaccines and Benadryl premedication for a dog with reaction concern.|options,staged,risk
507|Shadow|Cat|Travel certificate and thyroid monitoring|1|The visit was routine documentation and monitoring rather than an affordability negotiation.|The plan involved health-certificate logistics and routine thyroid or wellness blood work.|nooption
510|Goldie|Dog|Post-grooming ear infection|1|A straightforward ear-treatment visit where alternatives were not really the issue.|The veterinarian treated a mixed ear infection without the encounter turning into a meaningful affordability branch.|nooption
511|Goldie|Dog|Post-grooming ear infection|1|A straightforward ear-treatment visit where alternatives were not really the issue.|The veterinarian treated a mixed ear infection without the encounter turning into a meaningful affordability branch.|nooption
512|Goldie|Dog|Post-grooming ear infection|1|A straightforward ear-treatment visit where alternatives were not really the issue.|The veterinarian treated a mixed ear infection without the encounter turning into a meaningful affordability branch.|nooption
514|Cube|Dog|Ingrown nail and sedation-cost concern|1|This is a strong example of minimum-responsible care replacing a more expensive assumption.|The veterinarian addressed owner concern about sedation cost by explaining a simpler treatment path that still met the medical need.|options,money,staged,min,barrier,rep
552|Million|Cat|Post-dental vomiting and medication confusion|1|The veterinarian used supportive care and reassessment before jumping to invasive workup.|The discussion sorted pain-medication and steroid history, then paired GI support with boundaries for escalation.|options,staged,risk
554|Daisy|Dog|First seizure workup and referral framing|1|This is a clear staged-care case with explicit explanation of why not all escalation happens on day one.|The veterinarian recommended blood work now, explained why chronic anticonvulsants usually wait for recurrence, and named MRI or neurology as later steps.|options,staged,risk,rep
556|Kitty|Cat|Post-FLUTD recheck after surgery|1|The veterinarian deliberately chose the least disruptive reasonable next step.|The discussion explained why skipping urine collection today could be safer than provoking another stress-linked episode while continuing conservative support.|options,staged,risk,min,rep
565|Boo|Dog|Chronic GI disease and appetite support|1|The veterinarian staged monitoring and supportive medication before deeper escalation.|The visit used appetite support, recheck lab thinking, and possible future biopsy rather than a single all-at-once plan.|options,staged,risk
569|Lily|Dog|Ear bumps, skin masses, and diet-trial discussion|1|The veterinarian offered several reasonable branches without making the visit a cost argument.|The discussion contrasted sampling versus removing lesions and used diet-trial logic as a lower-intensity first step.|options,staged
583|Lexi|Dog|Urinary accident with drop-off testing plan|1|The veterinarian used a cheaper logistics move rather than more medicine.|The owner was told urine and fecal drop-off could be combined to save money while still checking the needed basics.|options,money,pay,staged
584|Lexi|Dog|Urinary accident with drop-off testing plan|1|The veterinarian used a cheaper logistics move rather than more medicine.|The owner was told urine and fecal drop-off could be combined to save money while still checking the needed basics.|options,money,pay,staged
585|Lexi|Dog|Urinary accident with drop-off testing plan|1|The veterinarian used a cheaper logistics move rather than more medicine.|The owner was told urine and fecal drop-off could be combined to save money while still checking the needed basics.|options,money,pay,staged
586|Nelly|Dog|Heart murmur follow-up and routine care|1|This was mainly a stable follow-up and preventive visit.|The conversation centered on murmur follow-up, vaccines, and grooming-type care rather than a meaningful affordability branch.|nooption
588|Daisy|Dog|Wellness, prevention, and lump review|1|The veterinarian still built prevention and treatment choices into a routine visit.|The discussion moved through Bordetella rationale, prevention choices, and what to monitor versus treat now.|options,staged
589|Milo|Dog|Vaccines, neuter pricing, and handling plan|1|The veterinarian made price visible inside a routine-care conversation.|The visit covered preventive care, neuter cost questions, and practical handling decisions for a nervous dog.|options,money,staged
590|Riley|Dog|Lumps, prevention, and compulsive licking|1|The veterinarian used a conservative step-first plan for a low-stakes chronic issue.|The discussion covered when to try gabapentin, what to monitor, and how to handle routine prevention around that.|options,staged
595|Odie|Dog|Allergy and diet-support questions|1|The veterinarian used diet and supportive-care branching rather than a single hard recommendation.|The discussion covered probiotic and food questions as staged support for chronic skin or GI signs.|options,staged
630|Booger|Cat|Upper respiratory and eye-risk check|1|The veterinarian used minimum-responsible outpatient care while explaining the red flags.|The plan paired supportive care and medication with explanation of why worsening discharge or corneal involvement would change urgency.|options,staged,risk,min
633|Miyuki|Cat|Matting, grooming, and anesthesia-cost discussion|1|This is one of the clearer cost-sensitive spectrum-of-care conversations in the batch.|The veterinarian compared a spicy-cat groomer plus gabapentin against grooming under anesthesia, while being explicit about extra cost and anesthesia risk.|options,money,staged,risk,min,rep
637|Salty|Dog|Acute hindlimb or knee pain|1|The veterinarian started with conservative treatment rather than immediate escalation.|The discussion used pain control and monitoring first for a likely musculoskeletal problem.|options,staged
641|Leo|Dog|Dental planning with cough concern|1|The veterinarian separated procedural planning from possible respiratory concern.|The visit staged blood work, dental timing, and cough evaluation while explaining why each mattered.|options,staged,risk
643|Cooper|Dog|Daycare vaccine counseling and behavior questions|1|Routine care still involved moderate branching around prevention and behavior support.|The discussion covered prevention choices, calorie guidance, and behavioral management without a real affordability conflict.|options,staged
646|Whiskers|Cat|Vomiting cat with suspected IBD flare|1|The veterinarian kept the plan staged and medically reasoned instead of escalating reflexively.|The discussion used food history, stress context, and possible blood work before broader escalation.|options,staged,risk
647|Rufus|Dog|Diarrhea and sensitive-stomach flare|1|The veterinarian kept the plan narrow and outpatient because the case still allowed it.|The visit used supportive care, fecal testing, and diet guidance as a minimum-responsible first step.|options,staged,min
648|Sawyer|Dog|Heart disease, breathing rate, and diuretic adjustment|1|This is a strong example of contextualized chronic-care tradeoffs.|The veterinarian balanced respiratory concern, kidney-value context, and cardiology-style reasoning while adjusting treatment in stages.|options,staged,risk,rep
649|Zeus|Dog|Poor appetite, diarrhea, and cough-like episodes|1|The veterinarian openly described today's options and sorted them by urgency.|The discussion moved through appetite support, anti-diarrheal expectations, respiratory concern, and how workup might expand if signs persisted.|options,staged,risk
657|Whiskers|Cat|Vomiting cat with suspected IBD flare|1|The veterinarian kept the plan staged and medically reasoned instead of escalating reflexively.|The discussion used food history, stress context, and possible blood work before broader escalation.|options,staged,risk
708|Houdini|Cat|Respiratory congestion and vaccine delay|1|The veterinarian used a low-intensity first step while explaining why timing mattered.|The discussion paired medication and supportive care with delaying vaccines until the cat was clinically better.|options,staged,risk
709|Maisie|Dog|Vaccine premedication and diarrhea recheck|1|The veterinarian used a lighter preventive path because the situation allowed it.|The plan involved premedication, tech-visit follow-up, and continued observation rather than a heavier immediate intervention.|options,staged,min
710|Banjo and Finn|Dog|Puppy vaccine catch-up with no records|1|The veterinarian used a practical restart strategy instead of assuming prior coverage.|The discussion framed restarting the puppy series as the safest staged preventive plan when records could not be confirmed.|options,staged
714|Champ|Dog|Stair issue and ear problem|1|The veterinarian used staged ortho reasoning while explaining what would trigger more workup.|The discussion covered possible paw or orthopedic pain, conservative care, and when to escalate if function worsened.|options,staged,risk
715|Champ|Dog|Stair issue and ear problem|1|The veterinarian used staged ortho reasoning while explaining what would trigger more workup.|The discussion covered possible paw or orthopedic pain, conservative care, and when to escalate if function worsened.|options,staged,risk
716|Tank|Dog|Paw or nail pain with ear discomfort|1|The veterinarian handled the case with conservative first steps rather than a heavy workup.|The plan paired symptom-directed care with recheck boundaries if pain or ear signs persisted.|options,staged
744|Simba|Dog|Puppy wellness and prevention counseling|1|Routine preventive care still involved staging and sequencing choices.|The discussion covered puppy vaccines, prevention timing, and Lepto or parvo risk explanation.|options,staged
748|Chloe and Molly|Cat|Senior-cat house-soiling workup|1|The veterinarian used a rule-out-first approach before behavior medication.|The plan put blood work ahead of behavioral medication and explained why medical causes needed to be sorted first.|options,staged,risk
753|Princess Mary Lou|Cat|Routine vaccines and urinary-diet refill|1|This was a stable preventive and maintenance visit rather than an affordability negotiation.|The conversation centered on routine vaccines, fecal testing, and diet continuation with no meaningful option conflict.|nooption
756|Buster|Dog|Snoring and senior blood-work discussion|1|The veterinarian used a narrower first step before chasing more complex causes.|The discussion framed senior blood work as the starting point for a snoring or weight-related concern.|options,staged
757|Maggie|Dog|Cytopoint follow-up and oral-mass watch|1|The veterinarian separated what could be monitored from what would require procedure later.|The discussion covered supportive care now and possible future excision if the oral growth changed.|options,staged
758|Ariel and Sebastian|Cat|Weight loss and inappropriate urination workup|1|The veterinarian staged common-cause diagnostics before any behavior-heavy framing.|The plan used blood and urine testing first and explained why the signs were not safe to assume were purely behavioral.|options,staged,risk
759|Spooky|Cat|Routine annual feline vaccines|1|A straightforward preventive visit where alternatives were not really the issue.|The transcript reads as routine vaccine care with no meaningful affordability branch.|nooption
762|Roxy|Dog|Collapse, murmur, and diet-risk discussion|1|The veterinarian used second-opinion counseling to frame a staged cardiac workup.|The discussion linked collapse, possible murmur, and grain-free diet concern while explaining what needed evaluation next.|options,staged,risk
763|Finn|Dog|Minor hindlimb issue and weight counseling|1|The veterinarian used practical conservative management rather than a large diagnostic push.|The discussion stayed on mild orthopedic concern, weight context, and simple next steps.|options,staged
764|Coco|Dog|Worsening ear infection with fever concern|1|The veterinarian paired treatment with enough workup to rule out something more serious.|The discussion used blood work, ear cleaning, and Claro while explaining why fever changed the case severity.|options,staged,risk
765|Bambino|Dog|Intermittent limping after play|1|The veterinarian kept the plan conservative because the dog was improving.|The discussion used pain-control and monitoring logic rather than immediate imaging for a now-intermittent limp.|options,staged
768|Davey|Cat|Weight loss, mouth pain, and dental disease|1|This is a strong example of narrowing the first step without minimizing the risk.|The veterinarian used blood work to separate dental pain from broader systemic disease before moving toward procedure-level care.|options,staged,risk,rep
769|Toffee|Dog|Incontinence, panting, and lingering limb issue|1|The veterinarian used a staged chronic-workup approach instead of one big recommendation.|The plan balanced Proin history, orthopedic concern, and next diagnostics while explaining why those pieces mattered.|options,staged,risk
770|Bubba|Dog|Recurrent neurologic or vertigo concern|1|The veterinarian acknowledged prior referral-level options while still building a staged path today.|The discussion framed worsening hind-end or neurologic signs, imaging history, and supportive care with explicit caution.|options,staged,risk
774|Gibson|Dog|Cough, diarrhea, joint pain, and drug reaction history|1|The veterinarian built the plan around what the patient had tolerated and what still needed checking.|The discussion used medication change and blood work while explaining why prior gabapentin reaction altered the path.|options,staged,risk
797|Josephine|Dog|Possible pancreatitis or GI flare|1|The veterinarian stayed with a minimum-responsible outpatient plan because the case had softened.|The plan used supportive care, monitoring, and reassessment rather than an immediate aggressive workup.|options,staged,min
799|Cocoa Puff|Dog|Acute pain after stairs|1|The veterinarian used conservative localization and monitoring rather than immediate escalation.|The conversation focused on finding the pain source and using stepwise treatment for a likely musculoskeletal problem.|options,staged
801|Toby|Dog|Acute hindlimb lameness and suspected ACL tear|1|This is a clean staged-orthopedic example with explicit downside framing.|The veterinarian explained why the lameness pattern fit cruciate disease and used conservative next steps before more definitive intervention.|options,staged,risk,rep
810|Finn|Dog|Puppy vaccine restart with uncertain records|1|The veterinarian used a safe restart approach instead of guessing at prior protection.|The plan framed re-starting the series as the simplest staged path when documentation could not be trusted.|options,staged
824|Smokey|Dog|Overdue prevention and prescription shopping|1|This is a strong example of a veterinarian offering practical lower-cost logistics.|The veterinarian discussed overdue vaccines and wrote a prevention prescription so the owner could shop around rather than buying only in-clinic.|options,money,pay,staged,rep,barrier
826|Norman|Dog|Routine wellness and vaccine visit|1|A routine preventive visit where alternatives were not the issue.|The conversation centered on annual wellness, prevention, and routine dental mention without a meaningful affordability branch.|nooption
835|Norman|Dog|Routine wellness and vaccine visit|1|A routine preventive visit where alternatives were not the issue.|The conversation centered on annual wellness, prevention, and routine dental mention without a meaningful affordability branch.|nooption
836|Norman|Dog|Routine wellness and vaccine visit|1|A routine preventive visit where alternatives were not the issue.|The conversation centered on annual wellness, prevention, and routine dental mention without a meaningful affordability branch.|nooption
837|Norman|Dog|Routine wellness and vaccine visit|1|A routine preventive visit where alternatives were not the issue.|The conversation centered on annual wellness, prevention, and routine dental mention without a meaningful affordability branch.|nooption
838|Norman|Dog|Routine wellness and vaccine visit|1|A routine preventive visit where alternatives were not the issue.|The conversation centered on annual wellness, prevention, and routine dental mention without a meaningful affordability branch.|nooption
853|Whitney|Dog|Arthritis, Bordetella, and Librela discussion|1|The veterinarian used routine care to show several reasonable branches rather than a single script.|The discussion covered Bordetella necessity and future arthritis-medication options without a real affordability conflict.|options,staged
873|Unknown|Dog|Splenectomy surgical dictation|1|This transcript is procedural dictation, not an owner-facing care-options conversation.|The text documents surgery rather than an exam-room discussion, so no meaningful affordability coding is available.|nooption
875|Harley|Dog|Routine vaccines and chronic-med refill visit|1|A stable maintenance visit where alternatives were not really the issue.|The conversation focused on routine preventive care and ongoing medication management.|nooption
878|Hudson|Dog|Senior baseline blood work after recent loss|1|This was mostly a routine monitoring visit shaped by owner context rather than affordability tradeoffs.|The veterinarian recommended baseline senior screening while the family framed the visit through recent losses and vigilance.|nooption,barrier
884|Bennett and Emmy|Dog|Annual care with written prevention scripts|1|The veterinarian used practical prescription logistics inside a routine visit.|The discussion covered prevention, anxiety products, and written scripts that let the owner fill medication elsewhere if preferred.|options,pay,staged
886|Nala|Dog|Broken nail follow-up and home-care plan|1|The veterinarian used minimum-responsible home care instead of unnecessary escalation.|The discussion supported wrapping and local care at home because the injury was already improving and did not need a heavier intervention.|options,staged,min
  `;

  const flagMap = {
    options: 'optionsOffered',
    money: 'explicitMoneyLanguage',
    decline: 'explicitDeclineInquiry',
    alt: 'alternativeOnDecline',
    pay: 'payRelatedOption',
    staged: 'stagedTradeoff',
    pharmacy: 'pharmacySavings',
    risk: 'riskExplained',
    min: 'minimumResponsible',
    nooption: 'noOptionButAppropriate',
    rep: 'representative',
    barrier: 'barrierDetected'
  };

  function createTags() {
    return {
      optionsOffered: false,
      explicitMoneyLanguage: false,
      explicitDeclineInquiry: false,
      alternativeOnDecline: false,
      payRelatedOption: false,
      stagedTradeoff: false,
      pharmacySavings: false,
      riskExplained: false,
      minimumResponsible: false,
      noOptionButAppropriate: false,
      representative: false,
      barrierDetected: false
    };
  }

  const transcripts = rows.trim().split('\n').map((line) => {
    const [id, pet, species, visit, accepted, takeaway, notes, flagText] = line.split('|');
    const tags = createTags();
    const flags = flagText ? flagText.split(',').filter(Boolean) : [];

    flags.forEach((flag) => {
      const key = flagMap[flag];
      if (key) tags[key] = true;
    });

    return {
      id,
      pet,
      species,
      visit,
      firstRecommendationAccepted: accepted === '1',
      takeaway,
      notes,
      tags,
      transcriptPath: `3-8-jason.szumski copy/Transcripts/${id}-transcript.txt`
    };
  });

  return {
    meta: {
      title: 'Andy Hand-Coded Batch 4',
      date: '2026-03-18',
      selectionSeed: '20260318-wave4',
      selectionMethod: 'Fourth non-overlapping 100-transcript hand-coded batch from the Transcripts folder using the uncoded backlog manifest.',
      memoPath: 'Andy_300_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
