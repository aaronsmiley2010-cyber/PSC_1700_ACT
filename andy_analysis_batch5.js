window.ANDY_ANALYSIS_BATCH5 = (() => {
  const rows = `
889|Unknown|Dog|Hind-leg mass check|1|This was mostly a straightforward mass check rather than a cost-of-care negotiation.|The veterinarian focused on examining and likely sampling the bump, with no meaningful affordability branch.|nooption
890|Leo|Dog|Wellness visit with fatty-mass review|1|A routine preventive visit where affordability was not the real issue.|The veterinarian updated vaccines, discussed routine testing, and treated the masses like typical lipomas rather than a spectrum-of-care problem.|nooption
895|Doug|Dog|Chronic ear and paw allergy flare|1|The veterinarian framed the case as chronic allergy management rather than a single one-shot fix.|The discussion linked ear problems and paw chewing to allergies and pointed toward a stepwise treatment path.|options,staged
900|Tallulah|Cat|Rescue-kitten vaccine and spay planning|1|Routine preventive care still involved staged timing decisions.|The plan sequenced rabies, distemper boosters, and later spay scheduling for a newly adopted kitten.|options,staged
903|Chloe|Dog|Allergy follow-up with limited authorized services|1|The visit was shaped more by family constraints than by lower-cost care design.|The discussion stayed mostly on approved vaccines and itch support rather than a broad options conversation.|nooption,barrier
928|Peter|Cat|Senior annual with deferred prevention|1|This was a routine wellness visit with one visible budget constraint.|The owner passed on prevention for now because it felt pricey, but the care plan itself stayed straightforward.|money,nooption,barrier
935|Parker|Dog|Acute lethargy and anorexia workup|1|The veterinarian treated the case like a staged medical problem rather than jumping straight to one answer.|The conversation worked through appetite loss, bowel changes, and next-step evaluation with clear concern about progression.|options,staged,risk
936|Zelda|Dog|Puppy lepto series and prevention counseling|1|Routine puppy care still involved preventive sequencing choices.|The veterinarian staged lepto boosters and future prevention decisions around the puppy schedule.|options,staged
937|Mia|Dog|Reverse-sneeze and congestion follow-up|1|The visit read more like a chronic upper-airway follow-up than an affordability negotiation.|The discussion centered on noisy breathing and prior response to medication rather than lower-cost tradeoffs.|nooption
938|Hazel|Dog|Skin and ear follow-up with new urinary signs|1|The veterinarian had to branch from skin follow-up into a new urinary workup.|The conversation linked persistent urinary signs to the need for additional checking rather than assuming the antibiotic had solved it.|options,staged,risk
958|Grace|Dog|Forelimb lameness and anal-gland concern|1|The veterinarian separated several low-grade problems into a staged plan.|The visit covered limping, possible anal-gland trouble, and a rear-leg lesion without forcing an all-at-once escalation.|options,staged
964|Tayo|Dog|Ascites recheck with possible mass|1|This is a strong staged-care case under serious clinical pressure.|The veterinarian recommended draining the belly now for comfort while broader answers and surgery decisions remained unresolved.|options,staged,risk,rep
967|Tyler|Cat|Young-cat wellness with owner budget pressure|1|The visit was routine, but the owner made pricing visible in the room.|The discussion covered vaccines, fecal timing, and affordability questions without becoming a true spectrum-of-care case.|money,nooption,barrier
970|Tara|Cat|Asthma management and inhaler logistics|1|This was a clean example of moving from short-term control to a safer long-term plan.|The veterinarian used prednisolone response to justify a fluticasone inhaler and added written-prescription and home-equipment logistics.|options,pay,pharmacy,staged,risk,rep
971|Bella|Dog|Separation-anxiety medication restart|1|The veterinarian treated this as a chronic-behavior management issue, not a cost conflict.|The discussion focused on long-term anti-anxiety medication use and shelter history rather than on affordability choices.|options,staged
977|Tyler|Cat|Young-cat wellness with owner budget pressure|1|The visit was routine, but the owner made pricing visible in the room.|The discussion covered vaccines, fecal timing, and affordability questions without becoming a true spectrum-of-care case.|money,nooption,barrier
988|Luna|Cat|Deteriorating diabetic-cat recheck|1|This encounter was dominated by urgency and decline, not by lower-cost branching.|The veterinarian focused on why the worsening course was concerning and why the prior expectations no longer fit.|nooption,risk
995|Kane|Dog|Puppy diarrhea with routine vaccines|1|The veterinarian used a minimum-responsible GI plan while continuing preventive care.|The discussion stayed conservative around diet, stool quality, and parasite logic instead of escalating aggressively.|options,staged,min
1008|Brianna|Cat|Drooling, weight loss, and fixed budget|1|This is a clear budget-aware workup case.|The veterinarian acknowledged a hard spending ceiling and still built a staged diagnostic path around the cat's weight loss and oral signs.|options,money,staged,risk,barrier,rep
1025|Zeke|Dog|Annual vaccines with Cytopoint refill|1|This was mostly routine preventive care with one ongoing itch treatment.|The visit focused on vaccines, fecal testing, and continuing Cytopoint rather than on a meaningful affordability branch.|nooption
1026|Ravioli|Dog|Separation anxiety and training plan|1|The veterinarian framed medication as support, not as the whole solution.|The plan combined ongoing meds, situational meds, and a training path instead of pretending one medication change would fix it.|options,staged,min
1078|Tilly|Dog|Chronic itch, fleas, and luxating patellas|1|This was mostly chronic maintenance care rather than a cost-of-care negotiation.|The conversation focused on flea control, itch history, and general maintenance rather than a real options conflict.|nooption
1091|Spencer|Dog|Vomiting, diarrhea, and optional lump aspirate|1|The veterinarian separated urgent GI care from a low-stakes lump decision.|The visit allowed either aspirating the lump or simply monitoring it while the stomach issue took priority.|options,staged
1095|Aki|Dog|Routine vaccines and screening tests|1|A straightforward preventive visit where alternatives were not the issue.|The veterinarian updated vaccines and routine screening with no meaningful affordability branch.|nooption
1102|Unknown|Dog|Prevention refill and online-pharmacy comparison|1|This was a practical prescription-logistics case inside a routine visit.|The veterinarian explicitly pointed out that the owner's prevention would be cheaper online and offered the in-clinic versus written-prescription path.|money,pay,pharmacy,nooption,barrier
1108|Bella|Dog|Chronic forelimb pain and anal bleeding concern|1|The veterinarian treated the case as a staged pain and rule-out problem.|The discussion linked intermittent lameness and new anal-area bleeding to a need for more focused evaluation instead of one simple explanation.|options,staged,risk
1110|Bella|Dog|Severe mobility decline and care goals|1|The veterinarian pushed back on an unrealistic fix and steered toward practical support.|The discussion ruled out casting as a real solution and moved toward more realistic comfort-oriented management.|options,staged,min
1127|Karma|Dog|Foreign-material ingestion with toe lesion|1|The veterinarian used an immediate but still stepwise plan.|The visit paired induced vomiting now with local treatment for the irritated toe so the dog would stop re-injuring it.|options,staged,risk,min
1128|Jovi|Dog|Puppy lepto discussion with hospitalization cost|1|This is a strong preventive-risk conversation made financially concrete.|The veterinarian explained what leptospirosis can cost and why the vaccine mattered, without overselling it as a scare tactic.|options,money,staged,risk,rep
1130|Unknown|Dog|Foreign-body surgical dictation|1|This transcript is procedure documentation rather than an owner-facing options conversation.|The text describes surgery and does not function as a cost-of-care exchange.|nooption
1131|Cooper|Dog|Scooting, loose stool, and possible anal-sac issue|1|The veterinarian worked through a modest outpatient problem with staged reasoning.|The conversation linked stool quality, scooting, and possible anal-sac disease without turning it into a larger affordability discussion.|options,staged
1132|Unknown|Dog|Trauma radiology and reduction note|1|This was a medical trauma record, not a routine exam-room tradeoff conversation.|The note focused on wounds, dislocation, and imaging findings rather than affordability or option setting.|nooption,risk
1267|Leah|Dog|Recurrent bladder stones and diet failure|1|The case again centered on staged decision making rather than easy cheap answers.|The veterinarian discussed recurrent stones, poor food acceptance, and the possibility of surgery in a clearly burdened case.|options,staged,risk,barrier
1270|Milo|Dog|Persistent vomiting after conservative care|1|The veterinarian kept the case staged but made clear that the history now justified a harder look.|The plan leaned on rechecking x-rays and reassessing after failed outpatient care rather than simply repeating the same conservative approach.|options,staged,risk
1282|Kylo|Dog|Vaccine-reaction lump follow-up|1|This was a straightforward recheck where alternatives were not the issue.|The veterinarian treated the lump as a likely resolving vaccine reaction and did not need a broad option set.|nooption
1322|Wally|Dog|Persistent oral pain after dental work|1|The veterinarian treated the case as a persistent problem that still needed sorting out.|The discussion focused on why the dog seemed to have the same pain as before the dental and what might still be wrong.|options,staged,risk
1329|Libby|Dog|Acute anorexia and diarrhea visit|1|The veterinarian used symptom progression to justify more evaluation.|The conversation linked appetite loss, diarrhea, and low energy into a staged but clearly concerning workup path.|options,staged,risk
1343|Lychee|Cat|Cord-chewing behavior counseling|1|The veterinarian used practical harm reduction before anything more aggressive.|The discussion focused on wire protection, anti-chew deterrents, and behavior redirection rather than on medication or expensive workups.|options,staged,risk,min
1348|Ozzy|Cat|FIP treatment-site lump check|1|This visit was mostly a treatment-side-effect recheck rather than a cost discussion.|The veterinarian discussed injection-site changes and the limits of what could safely be added during FIP treatment.|nooption
1353|Molly|Dog|Annual exam after prior mast-cell surgery|1|A routine annual visit where the scar concern did not create a meaningful care-path conflict.|The veterinarian reassured the owner that the thickened area felt like scar tissue and proceeded with routine preventive care.|nooption
1369|Remi|Dog|Post-hospital regurgitation and medication review|1|The veterinarian had to keep a complicated GI or respiratory case staged.|The discussion sorted home medications, ongoing coughing, and the difference between vomiting and regurgitation to guide next steps.|options,staged,risk
1420|Harley|Cat|Herpes flare and possible antibiotic need|1|The veterinarian treated this as a recurrent flare that might need escalation from supportive care.|The conversation moved from lysine alone toward antibiotic thinking based on prior response and current discharge.|options,staged
1428|Zoe|Dog|Wellness check with vaccine and prevention history confusion|1|The visit pulled several prior concerns into one staged review rather than one simple annual exam.|The veterinarian had to sort prior vaccine reactions, prevention history, and recent vomiting while still handling basic wellness goals.|options,staged,risk,barrier
1432|Abby|Dog|Chronic itch management and medication choice|1|The veterinarian treated this like a chronic-allergy management problem with real branches.|The discussion contrasted inconsistent Apoquel use with Cytopoint and the effect of dosing correctly over time.|options,staged
1436|Slinkers|Cat|Weight loss and vomiting workup|1|This is a strong example of staging around a declining chronic case.|The veterinarian used history, visible weight loss, and expected labs to move from vague vomiting toward a more formal workup.|options,staged,risk,rep
1441|Unknown|Dog|Puppy wellness with diet-related loose stool|1|The veterinarian used a minimum-responsible feeding correction instead of overreacting.|The discussion focused on simplifying the diet, routine prevention, and fecal follow-up rather than expensive escalation.|options,staged,min
1442|Unknown|Dog|Routine vaccines and heartworm testing|1|A straightforward preventive visit with no meaningful affordability branch.|The conversation stayed on vaccine brand questions and routine screening.|nooption
1489|Tilly|Dog|Routine wellness and ProHeart planning|1|This was a routine annual-style preventive visit.|The discussion centered on vaccines and prevention rather than a meaningful options conflict.|nooption
1491|Ozzie and Alfie|Cat|Two-cat vaccine wellness visit|1|A preventive visit where affordability was not the core issue.|The conversation focused on routine vaccines and stable chronic history rather than on staged care decisions.|nooption
1495|Leo|Cat|FIV cat with stress colitis and house-soiling|1|The veterinarian used a low-intensity first explanation before overmedicalizing the case.|The discussion framed blood in stool and urine issues through stress and transition before jumping to a heavier workup.|options,staged,risk,min
1497|Unknown|Cat|Lower-urinary signs in a medically difficult cat|1|The veterinarian had to balance likely urinary disease against a cat with limited handling tolerance.|The conversation centered on classic urinary signs, blood, and the practical challenge of working up a chronically congested cat.|options,staged,risk,barrier
1502|Bella|Dog|Routine annual vaccines and prevention|1|A straightforward preventive visit where affordability was not really the issue.|The veterinarian updated vaccines, testing, and prevention with no meaningful lower-cost negotiation.|nooption
1505|Gus|Dog|Preventive care with heartworm-brand pricing|1|This was a clear prevention-logistics conversation with explicit price awareness.|The veterinarian discussed brand pricing, waiting for heartworm results, and using a written prescription if the owner preferred another source.|options,money,pay,staged,barrier
1509|Cali|Dog|Reverse sneezing and seasonal-allergy timing|1|The veterinarian stayed conservative because the dog was otherwise doing well.|The discussion linked the noisy breathing to timing and monitoring rather than to an immediate heavy workup.|options,staged,min
1510|Malcolm|Cat|Stress-linked upper-respiratory flare|1|The veterinarian used history and context to keep the plan narrow.|The discussion tied eye and nasal discharge to a stressful move and framed the problem as a likely URI flare rather than something exotic.|options,staged,risk,barrier
1527|Duke|Dog|Ear issues with cheaper prevention script|1|This visit included a simple but real lower-cost logistics move.|The veterinarian offered a written Trio prescription because it would be cheaper elsewhere while still treating the ear problem.|options,money,pay,pharmacy,staged
1533|Bentley|Dog|Separation-anxiety follow-up|1|The veterinarian handled this as a chronic behavior problem with situational triggers.|The discussion centered on anxiety when the owner travels and practical management rather than on affordability.|options,staged
1537|Milo|Dog|Puppy vaccines and microchip timing|1|Routine puppy care still involved staging decisions.|The veterinarian explained when to place the microchip and how it could wait until a later visit if preferred.|options,staged
1545|Zeus|Dog|Routine annual vaccines|1|A straightforward annual preventive visit.|The discussion stayed on routine rabies, Bordetella, and wellness rather than on a meaningful options branch.|nooption
1561|Mars|Dog|Booster-vaccine visit|1|This was purely a routine preventive encounter.|The veterinarian updated shots and confirmed the dog was doing well at home.|nooption
1563|Chloe Joy|Dog|Loose stool with anal-sac abscess|1|The veterinarian treated the case with a narrow outpatient plan.|The discussion identified a likely ruptured anal-sac abscess and laid out local treatment rather than a broad workup.|options,staged,min
1568|Storm|Dog|Puppy rabies and distemper visit|1|Routine preventive care with standard staging, not a cost-of-care conflict.|The veterinarian handled vaccines, tag logistics, and hernia check as a straightforward puppy visit.|options,staged
1570|Freddie and Einar|Dog|Two-puppy vaccine start|1|Routine puppy care still involved sequencing choices.|The veterinarian staged which vaccines each puppy needed based on age and uncertain prior records.|options,staged
1600|Chance|Dog|Establish-care wellness with small bump|1|This was a routine establish-care visit where affordability was not the issue.|The veterinarian handled vaccines, testing, prevention, and a small bump without a meaningful lower-cost branch.|nooption
1602|Bandit|Dog|Increased drinking and weight loss workup|1|This is a strong chronic-disease triage case.|The veterinarian treated the increased thirst and weight loss as signs that now justified a more formal workup rather than casual monitoring.|options,staged,risk,rep
1607|Willow|Dog|New rescue with suture removal and prevention questions|1|The veterinarian used routine care to stage prevention and recovery steps.|The discussion covered suture removal, whether Lepto made sense, and what prevention fit a very small new dog.|options,staged
1620|Luna|Cat|Urinary-crystal follow-up and surgery reconsideration|1|The veterinarian revisited a previously deferred surgery inside a staged chronic-care conversation.|The discussion covered recurring signs, repeat x-rays, written-diet logistics, and when surgery would again make sense.|options,pay,pharmacy,staged,risk,barrier
1628|Logan|Dog|Anal-gland abscess second opinion|1|The veterinarian used a practical follow-up frame rather than a bigger workup.|The discussion centered on whether the rupture and current medication course were moving the dog in the right direction.|options,staged,min
1629|Sofia|Dog|Final puppy vaccines with mild skin concerns|1|Routine preventive care still included minor branching around skin management.|The veterinarian updated vaccines and addressed chest rash and nail-bed debris without a major affordability branch.|options,staged
1632|Miranda|Cat|Diabetic-cat vomiting and ketone rule-out|1|The veterinarian used a classic staged diabetic-crisis check.|The discussion prioritized glucose and ketone assessment, then supportive care and appetite support if the numbers allowed an outpatient path.|options,staged,risk,min
1764|Grace|Dog|Routine vaccines and heartworm testing|1|A straightforward preventive visit where alternatives were not the issue.|The encounter centered on routine shots and blood draw.|nooption
1956|Unknown|Dog|Scooting, anal-gland pain, and paw licking|1|The veterinarian treated the case as a modest outpatient problem.|The conversation centered on likely anal-gland disease and concurrent paw irritation rather than on affordability tradeoffs.|options,staged,min
1959|Shadow|Dog|Routine vaccines with kennel-cough counseling|1|The veterinarian added a preventive option to an otherwise routine visit.|The discussion explained why Bordetella made sense for grooming exposure even though the dog was otherwise well.|options,staged
1963|Bentley|Dog|Cryptorchid-neuter and stamina discussion|1|The veterinarian laid out a real spectrum between full neuter and a narrower surgical compromise.|The discussion covered the hidden testicle, tumor risk, hip concerns, and what surgery options still preserved some owner preference.|options,staged,risk
1965|Gunnar and Keto|Cat|Two-cat visit before assisted-living move|1|This was mostly a logistics and maintenance visit rather than a cost-of-care negotiation.|The veterinarian handled asthma history, a move, and minimal requested services without a meaningful options conflict.|nooption,barrier
1977|Nigel|Dog|Routine vaccines with chronic monthly vomiting|1|The veterinarian treated the vomiting as something to characterize, not ignore completely.|The conversation stayed mostly preventive but still asked what the intermittent vomiting actually looked like.|options,staged
1988|Tico|Dog|Allergy flare and medication choice|1|The veterinarian presented real allergy-treatment branches instead of one mandatory path.|The discussion contrasted Benadryl, Apoquel-style oral control, and Cytopoint while working through chronic itchy-skin signs.|options,staged
1992|Unknown|Cat|Urinary-diet follow-up with increased urination|1|This was mostly a chronic-care check rather than a lower-cost negotiation.|The veterinarian leaned toward blood work and monitoring given more frequent urination on a urinary diet.|nooption
1999|Karma|Cat|Annual vaccines with optional senior blood work|1|This was a routine visit with one explicit price discussion.|The veterinarian explained why senior screening was useful and made the approximate cost visible while leaving the choice to the owner.|options,money,staged
2003|Henry|Dog|Picky eating, mild lameness, and rabies choice|1|The veterinarian mixed routine care with explicit price framing around vaccine choices.|The discussion covered food habits, mild lameness, and the one-year versus three-year rabies decision with county-tag cost differences spelled out.|options,money,staged
2016|Cora|Dog|Bloody vomiting and diarrhea after tick exposure|1|This is one of the clearest staged-risk conversations in the batch.|The veterinarian worked through tick exposure, hemorrhagic vomiting, bruising risk, blood work, and esophagitis treatment without minimizing the severity.|options,staged,risk,rep
2022|Micah|Dog|Chronic allergy dog with prior medication reactions|1|The veterinarian had to build options around what the patient reportedly could not tolerate.|The discussion moved toward diet trial and topical support because Cytopoint and Apoquel seemed off the table or unreliable.|options,staged,risk
2045|Unknown|Dog|New-puppy diet and preventive counseling|1|The veterinarian kept the plan basic and educational because the owners were new to dogs.|The conversation centered on simplifying food choices, routine prevention, and basic puppy guidance rather than expensive escalation.|options,staged,min
2127|Rue|Dog|New gagging and possible toy ingestion|1|The veterinarian treated the complaint as a staged respiratory or upper-GI problem.|The discussion clarified what gagging meant, what came up, and whether toy ingestion or airway irritation was more likely.|options,staged,risk
2205|Zoe|Dog|Eye-medication renewal and vaccine logistics|1|The veterinarian had to sort chronic eye care and routine prevention in the same visit.|The discussion covered tacrolimus use, vision limits, vaccine timing, and prevention refills without turning into a pure cost negotiation.|options,staged
2208|Unknown|Dog|Routine wellness and pantry-surfing counseling|1|This reads like a straightforward wellness summary rather than a live tradeoff conversation.|The recommendation was simply to secure food access and continue routine preventive care.|nooption
2209|Unknown|Dog|Pain control, diarrhea, and explicit affordability limits|1|This is a high-signal cost-of-care transcript.|The owner explicitly could not afford everything, so the veterinarian moved toward estimates, selective services, and a narrower plan around pain, allergy care, and chronic medications.|options,money,pay,staged,risk,barrier,rep
2214|Royal|Dog|Anaphylactic-reaction emergency note|1|This is an emergency treatment record, not a normal cost-of-care conversation.|The note focuses on acute treatment for a severe allergic reaction rather than on affordability or spectrum-of-care decisions.|nooption,risk
2227|Unknown|Cat|Elderly-cat rabies visit and eye-drop discussion|1|The visit was mostly routine, with only a small branch around vaccine duration.|The conversation focused on overdue rabies, one-year versus three-year timing, and ongoing eye care in a very old cat.|options,staged
2233|Enzo|Dog|Dental consult with prior murmur concern|1|This was primarily a pre-procedure consult rather than a cost-of-care negotiation.|The veterinarian focused on whether the past murmur concern still changed dental planning.|nooption
2236|Unknown|Dog|Newly adopted dog wellness screen|1|A routine establish-care visit where alternatives were not the issue.|The veterinarian handled screening, Trio, diet history, and microchip reading without a meaningful affordability branch.|nooption
2249|Sinister|Dog|Vaccine update and chronic-med review|1|This was mostly a records-and-maintenance visit.|The veterinarian updated overdue vaccines and reviewed the long-term meds without a real lower-cost branch.|nooption
2250|Unknown|Dog|Routine annual wellness and nail trim|1|A straightforward preventive visit where affordability was not the issue.|The encounter centered on routine vaccines, heartworm testing, and nail trim.|nooption
2262|Miller|Dog|Chronic cough with prior owner-declined x-rays|1|This is a strong example of a support-care path being revisited after a year of persistence.|The veterinarian returned to the question of imaging and heart-failure concern after chronic coughing had never really resolved.|options,staged,risk,rep
2400|Unknown|Dog|String vomiting and soft-stool follow-up|1|The veterinarian used a minimum-responsible GI plan after a possible foreign-body event.|The discussion stayed on bland diet, stool quality, and what the string episode meant before jumping to a more invasive path.|options,staged,risk,min
2445|Fluffy|Dog|Acute cruciate-injury consult with surgery cost|1|This is a clean staged-orthopedic cost conversation.|The veterinarian explained likely cruciate disease, strict rest, pain control, referral options, and the approximate surgical cost instead of pretending it was a simple sprain.|options,money,staged,risk,rep
2491|Unknown|Dog|Acute vomiting and bloody diarrhea visit|1|The veterinarian handled this as a staged GI triage problem.|The discussion worked through timing, possible triggers, and whether the bloody diarrhea fit a toy-eater or stress-triggered picture.|options,staged,risk
2493|Kaiser|Dog|Neuter consult and anti-nausea discussion|1|The veterinarian used the consult to explain timing and anesthesia-side-effect management.|The discussion covered when neutering made sense and how Cerenia could reduce peri-anesthetic nausea.|options,staged,risk
2508|Trader Joe|Cat|Short vomiting spell in a previously food-sensitive cat|1|The veterinarian kept the workup narrow because the cat was still fairly bright and eating.|The discussion framed plant ingestion and food sensitivity as likely explanations while still asking about water intake and patterns.|options,staged,min
2516|Unknown|Dog|Chronic self-traumatized skin lesion|1|The veterinarian treated the lesion as a recurring structural problem, not just another hot spot.|The discussion contrasted continuing cover-and-manage behavior with eventual removal because the dog kept reopening the area.|options,staged,risk
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
      title: 'Andy Hand-Coded Batch 5',
      date: '2026-03-18',
      selectionSeed: '20260318-wave5',
      selectionMethod: 'Fifth non-overlapping 100-transcript hand-coded batch from the Transcripts folder using the uncoded backlog manifest.',
      memoPath: 'Andy_400_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
