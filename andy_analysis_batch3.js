window.ANDY_ANALYSIS_BATCH3 = (() => {
  const rows = `
463|Maggie|Dog|Senior arthritis and vaccine review|1|The veterinarian used stepwise arthritis management instead of a single fixed plan.|The visit covered NSAID monitoring, Librela as a future option, and routine vaccine decisions without direct budget pressure.|options,staged
550|Kane|Dog|Routine puppy wellness|1|This was a straightforward preventive visit rather than a cost-of-care negotiation.|The conversation focused on feeding, growth, and routine puppy guidance with no meaningful alternative-path discussion.|nooption
2481|Xena|Dog|Annual vaccines and preventive care|1|A routine wellness visit with no real affordability branch to code.|The plan centered on vaccines, fecal testing, and routine care rather than choosing among materially different options.|nooption
2929|Duncan|Dog|Masses and dental planning|1|The veterinarian separated biopsy, removal, and anesthesia timing into a manageable staged plan.|The discussion included estimates, whether to sample first or remove while under anesthesia, and how to bundle care efficiently.|options,money,staged,barrier
3221|Caramel|Dog|Allergy and paw-licking management|1|This was a clear spectrum-of-care case with medication and supportive-care choices.|The veterinarian discussed Cytopoint, Apoquel, wipes, and lower-intensity allergy support while noting relative expense differences.|options,money,staged
3228|Harley|Dog|Hemorrhagic diarrhea and dehydration|1|The veterinarian offered hospitalization-level care versus outpatient support with caution.|Diagnostics, fluids, and escalation were discussed as a staged plan rather than a single take-it-or-leave-it recommendation.|options,staged,risk,rep
3803|Twyla and Luna|Cat|Routine vaccine visit with minor paw concern|1|This visit was mostly preventive care with a small treatment add-on.|The veterinarian handled routine vaccines and a local paw issue without a meaningful affordability or decline conversation.|nooption
3929|Zoey|Dog|Wellness with parasite prevention choices|1|The care plan included explicit product and price comparisons for prevention.|The veterinarian compared Bravecto and Simparica, discussed convenience, and made the cost difference visible without conflict.|options,money,pay,staged
4603|Monty|Dog|Coughing workup and medication refill|1|The veterinarian mixed diagnostics with cheaper prescription logistics.|The visit paired chest-imaging reasoning with a written allergy prescription and longer-fill options to reduce medication cost.|options,money,pay,pharmacy,staged
5380|Sammy|Cat|Constipation and possible urinary issue|1|The veterinarian used a staged diagnostic and treatment path rather than immediate escalation.|The plan moved through x-rays, fluids, and enema-if-needed logic with home-care framing when safe.|options,staged
5502|Maddie|Dog|Urinary recheck and stone monitoring|1|This is a modest but real logistics-and-cost case.|The veterinarian contrasted in-house versus send-out urine testing and noted the smaller price advantage of the send-out path.|options,money,pay,staged
6396|Daisy|Dog|Lump check and aspirate decision|1|The veterinarian framed sampling now and removal later as separate choices.|The plan preserved the option to aspirate now, watch, or remove later depending on results and owner preference.|options,staged
7031|Phoenix|Dog|Post-dental facial swelling follow-up|1|This visit centered on clinical reasoning about swelling rather than affordable alternatives.|The veterinarian explained sinusitis versus pitting edema and checked albumin levels, but it was not really a cost-of-care negotiation.|risk
7515|Stuart|Dog|Acute hindlimb paralysis|0|This was a strong example of referral versus conservative care being laid out clearly.|The veterinarian discussed neurologic referral and imaging against rest, pain control, and close monitoring with explicit cautions.|options,staged,risk,rep,barrier
8150|Petunia and Sully|Dog|Eye irritation and stain-first treatment|1|The veterinarian used stepwise treatment based on the corneal stain result.|The plan moved from stain testing to ointment now and steroid only if the scratch concern was cleared.|options,staged
9205|Hope|Dog|Seizure and chronic liver-disease monitoring|1|This was mainly a chronic-disease management visit, not a strong affordability case.|The discussion focused on monitoring, anesthesia caution, and ongoing seizure care rather than negotiating lower-cost alternatives.|risk
9231|Rigatoni|Cat|Vaccination note and routine preventive care|1|This transcript reads more like routine note material than a tradeoff conversation.|The content was brief and preventive-focused, so there was no meaningful option set to code.|nooption
11367|Lily|Dog|Syncope and heart-disease workup|0|This is one of the clearest cost-and-risk transcripts in the batch.|The veterinarian contrasted safer in-clinic workup and echo planning with medication adjustment, explained the heart-failure risk, and discussed financing tools.|options,money,pay,staged,risk,rep,barrier
11838|Moana|Dog|Blood blister or abscess check|1|The veterinarian used conservative treatment while leaving room to escalate.|The discussion framed local care now with recheck or stronger intervention later if the lesion worsened.|options,staged
14152|Dudley|Dog|Chronic loose stool and diet trial|1|The plan emphasized a minimum-responsible GI trial instead of a heavy initial workup.|The veterinarian used probiotics, diet change, and stool-focused monitoring as a narrow first step before broader escalation.|options,staged,min
14350|Layla|Dog|Vaccines with itching and preventive testing|1|This visit combined allergy options with explicit pricing around blood work.|The veterinarian compared Benadryl, Cytopoint, and Apoquel, and also contrasted a full panel with a narrower heartworm-focused test.|options,money,staged
18247|Ember|Cat|Vomiting and weight loss workup|1|The veterinarian staged GI diagnostics and stabilization rather than jumping straight to surgery.|The plan used imaging, short hospitalization, and reassessment while explaining why more invasive workup might be needed later.|options,staged,risk
19907|Francis|Cat|Kidney-disease recheck|1|This was a standard chronic-care follow-up without much alternative framing.|The visit centered on blood pressure, lab monitoring, and ongoing kidney management rather than an affordability negotiation.|nooption
20860|Indy|Cat|Post-surgery vomiting and possible litter ingestion|1|The veterinarian used supportive care first because immediate escalation was not clearly warranted.|The plan relied on x-rays, fluids, and anti-nausea treatment with recheck boundaries rather than aggressive intervention.|options,staged,risk,min
20864|Mocha|Dog|Lip laceration repair decision|0|The veterinarian laid out two medically reasonable paths with different intensity.|The discussion contrasted suturing now against letting the wound heal with medication support and explained the tradeoffs of each.|options,staged,risk,min,rep
29906|Mia|Dog|Wellness with dental timing discussion|1|Insurance timing and practical sequencing shaped the recommendation more than illness severity.|The veterinarian discussed whether to do the dental while the deductible was already met rather than postpone it without reason.|options,money,barrier
33638|Storm|Dog|Annual exam and behavior questions|1|This was mostly routine guidance with no important lower-cost branch.|The visit covered annual care, handling, and supplement advice without a meaningful affordability pivot.|nooption
35886|Casper|Dog|Ear odor triage note|1|The available transcript is too fragmentary to read as an option-setting encounter.|The text is mostly a handoff about a dirty ear and cytology prep, not a substantive affordability discussion.|nooption
36073|Tracy|Dog|Seizure follow-up and medication planning|1|This was a good example of medication sequencing rather than all-at-once escalation.|The veterinarian discussed cluster Keppra use, possible potassium bromide next, and a cheaper send-out bloodwork option.|options,money,staged,risk
40185|Scar|Cat|Young rescue wellness and preventive planning|1|A routine intake visit with standard preventive decisions.|The conversation focused on vaccines, testing, and spay planning without a meaningful cost-of-care negotiation.|nooption
44864|Roxy|Dog|Vaccine interval and skin-tag removal|1|The veterinarian made vaccine timing and low-stakes procedure timing visible as options.|The visit included a one-year versus three-year rabies discussion and whether to remove a small skin tag now or later.|options,money,staged,min
57124|Oliver|Cat|Chronic URI and oral-mass concern|1|The veterinarian kept the plan narrow while explaining what would trigger a bigger workup.|The discussion balanced supportive care, appetite support, and oral-mass concern with biopsy or imaging reserved for worsening signs.|options,staged,risk,min
64154|Milli|Dog|Limping and likely luxating patella flare|1|This was mainly conservative orthopedic management rather than a cost-driven negotiation.|The veterinarian used rest and pain control with monitoring, but did not really lay out a broader affordability spectrum.|options,staged
64226|Coco|Dog|New puppy care and preventive schedule|1|The veterinarian staged routine puppy prevention and timing decisions.|The plan covered vaccine timing, fecal testing before deworming, and spay timing as practical next-step options.|options,staged
80921|Vader|Cat|Senior wellness and annual lab timing|1|The veterinarian discussed whether to do annual bloodwork now or defer appropriately.|This was a mild example of option setting around timing rather than a strong affordability conversation.|options,min
81085|Wednesday|Cat|Short coccidia result call|1|A brief follow-up call with a straightforward treatment plan.|The transcript was essentially result delivery, so there was no meaningful options discussion to code.|nooption
82967|Wrigley|Dog|Tail lesion recheck|1|This was a simple follow-up with local-care guidance.|The veterinarian adjusted topical management and environment advice without a strong affordability or decline component.|options,staged
100827|Stella|Dog|Chronic ear disease follow-up|1|The veterinarian kept the plan conservative with room to escalate if needed.|The visit focused on refill management, ear care, and diet changes as a staged path rather than immediate advanced workup.|options,staged
101055|Rickie|Dog|Diarrhea and gastroenteritis management|1|The veterinarian offered a narrow, practical first-line plan before broader testing.|The discussion balanced bland diet or Biome food, symptomatic medications, and optional bloodwork as a staged outpatient approach.|options,staged,min
114655|Merlin|Dog|Routine vaccines and heartworm testing|1|A straightforward preventive visit without a meaningful affordability branch.|The visit centered on vaccines, weight, and testing with no real tradeoff conversation to code.|nooption
135884|Hazel|Dog|Routine wellness with dental recommendation|1|The veterinarian stayed close to standard preventive care.|The conversation covered annual care, Trio prevention, and a future dental recommendation without an active cost negotiation.|nooption
143759|Sombra|Dog|Soft-tissue hindlimb strain|1|This was a conservative lameness visit with limited branching.|The plan focused on anti-inflammatory treatment and rest, with little meaningful affordability dialogue.|options,staged
145941|Nymeria and Zuko|Dog|Routine annual care for two dogs|1|This was essentially a preventive double annual rather than a tradeoff case.|The visit covered vaccines, nail-trim considerations, and routine checks without meaningful option pressure.|nooption
161591|Indy|Dog|Wellness with stool sample and lump note|1|A brief routine visit with no real affordability decision point.|The transcript was largely preventive and observational, not a substantive options conversation.|nooption
161690|Oakley|Dog|Partial ACL tear management|1|The veterinarian contrasted surgery planning with conservative pain-control management.|The visit balanced anti-inflammatory treatment and rest against later orthopedic referral if the knee failed to improve.|options,staged,risk
169953|Zaza|Dog|New puppy vaccines and prevention|1|The veterinarian staged preventive decisions in a routine new-puppy visit.|The plan covered vaccine timing, Bordetella, Trio, fecal testing, and home-care advice without overt money talk.|options,staged
192844|Sammy|Cat|Asthma and diabetes medication management|1|The veterinarian adjusted chronic therapy through a staged plan rather than a single fixed answer.|Prednisone timing, gabapentin for visits, and monitoring were discussed as practical next steps.|options,staged
194386|Luna|Dog|Possible cruciate tear|0|This was a clear surgery-versus-conservative-management conversation.|The veterinarian discussed orthopedic surgery against rest and medication, with explicit caution about what a lower-intensity path might miss.|options,staged,risk,rep
197065|Willow|Dog|Senior wellness with rabies and Heartgard logistics|1|The veterinarian blended preventive options with cheaper pharmacy access.|The discussion covered one-year versus three-year rabies decisions and using a written Heartgard prescription through Chewy.|options,pay,pharmacy,staged
208748|Ginger|Dog|Diabetes insipidus and new diabetes mellitus|1|The veterinarian laid out a real fork between diet trial and insulin initiation.|The conversation balanced trying diet support against starting insulin immediately and explained why waiting could be risky.|options,staged,risk,rep
216538|Montague|Cat|Ear puncture wound after cat fight|1|The veterinarian used a conservative-first plan with clear escalation boundaries.|The plan started with topical care and monitoring, reserving oral antibiotics or drainage if swelling or infection worsened.|options,staged,risk,min
227278|Willow|Dog|Dog-attack ear recheck|1|This was mostly a recovery follow-up with modest plan refinement.|The conversation focused on ongoing meds, diet, and healing rather than a meaningful affordability negotiation.|options,staged
229292|Chloe|Dog|Yeast ear infection and cleaner choice|1|The strongest affordability move here was channeling the owner toward a cheaper product source.|The veterinarian recommended treatment and explicitly suggested lower-cost purchasing through Chewy, Amazon, or PetSmart.|options,money,pay,pharmacy
258313|Freddie|Cat|Possible string foreign body|1|The veterinarian staged care around what imaging suggested rather than rushing to surgery.|The plan used enema, fluids, and recheck logic while holding escalation in reserve if the object failed to pass.|options,staged,risk,min
258339|Banks|Dog|Puppy vomiting after negative parvo test|1|The veterinarian kept the plan outpatient and supportive as a minimum-responsible first step.|The discussion favored symptomatic care and monitoring over a heavier workup once parvo was ruled out.|options,staged,min
289452|Cakil|Dog|Puppy vomiting and diarrhea|0|This is a clean example of alternatives after the owner chose to monitor.|The veterinarian outlined supportive care, fecal testing, and red-flag monitoring when the owner did not want to push to broader intervention.|options,alt,staged,risk,rep,barrier
305320|Duke|Dog|Tail amputation-site irritation|1|The veterinarian used a lower-intensity local-care path before oral escalation.|The plan contrasted topical treatment now with antibiotics later if the site kept worsening.|options,staged,min
319702|Drake|Dog|Achilles or soft-tissue injury|1|The veterinarian treated this as a conservative orthopedic problem first.|Injectable pain relief, tablets, and rest were used as a staged plan before more advanced workup.|options,staged
332153|Maddie|Dog|Ear infection, cyst, and baseline bloodwork|1|The veterinarian bundled several manageable issues without forcing a bigger plan than needed.|The visit covered ear treatment, cyst drainage, and baseline monitoring with no overt budget conflict.|options,staged
333427|Johnnie|Dog|Ear flakes and prevention refill|1|The affordability move here was more about ordering channel and convenience.|The veterinarian discussed skin products and clinic-shipped NexGard options rather than a major medical tradeoff.|options,pay,staged
338819|Zousy|Cat|Vomited plastic concern|1|The veterinarian used imaging and supportive care while holding surgery in reserve.|The plan relied on x-rays, anti-nausea treatment, and fluids with warnings about when obstruction concern would rise.|options,staged,risk,min
339342|Ghost|Dog|Facial hot spots and discharge|1|The veterinarian offered local care and oral therapy as different intensity levels.|The discussion contrasted topical treatment with oral antibiotics if the lesions progressed.|options,staged,min
346251|Cosmo|Cat|Stomatitis flare and supportive meds|1|The veterinarian avoided overtreating a mild flare.|The plan leaned on supportive medication refills and watching the mouth rather than rushing back to steroids or more aggressive intervention.|options,staged,min
349661|Olive|Cat|Thyroid and prednisone follow-up|1|This was medication adjustment through stepwise monitoring.|The veterinarian changed meds gradually and used follow-up labs rather than a more disruptive immediate shift.|options,staged
360010|Lucy|Dog|Protein-losing enteropathy management|0|This is one of the strongest examples of medical staging plus cheaper pharmacy logistics.|The veterinarian contrasted biopsy-level diagnostics with starting treatment first, discussed online pharmacy cost matching, and explained the limits of waiting.|options,money,pay,pharmacy,staged,risk,rep,barrier
387239|Linkle|Cat|Upper respiratory infection treatment|1|The veterinarian offered different treatment intensities without dramatizing the case.|The plan contrasted oral medication with Convenia-style injectable support and appetite aids as a staged path.|options,staged
408038|Caine|Dog|Weight loss and diarrhea after boarding|1|The veterinarian kept the plan outpatient and practical.|The discussion used symptomatic medication, bland-diet support, and fecal follow-up instead of a larger immediate workup.|options,staged,min,barrier
416985|Dina and Ollie|Cat|Diabetes and dental management discussion|1|The visit used chronic-disease tradeoffs and procedure timing rather than a single rigid answer.|The veterinarian discussed Bexacat versus older insulin frameworks and why dental planning mattered more because of pred use.|options,staged,risk
421393|Wasabi|Cat|Sedation planning and move-related care|1|The veterinarian tailored the plan around handling limits and upcoming travel.|The discussion covered sedation options for nails, gabapentin for the move, and vaccine timing before relocation.|options,staged,barrier
421556|Cali|Dog|Seizure or stroke decline call|1|This was a grave follow-up where meaningful lower-cost branches were not really the issue.|The conversation centered on neurologic decline and prognosis rather than presenting a wider affordability spectrum.|nooption,risk
421881|Morty|Dog|Eye-ulcer recheck and antibiotic switch|1|The veterinarian used response-based treatment adjustment rather than a bigger workup.|The plan contrasted stopping medication if healed with switching ointments if still irritated, based on restaining the eye.|options,staged,min
422973|Gyppy|Dog|Urinary obstruction and prostate hospitalization update|1|This was largely a status-and-risk conversation rather than a broad options discussion.|The veterinarian focused on obstruction risk and next steps in hospitalization, not a meaningful affordability spectrum.|risk
435764|Louie|Dog|Grape exposure and kidney-risk management|0|This is a strong example of financial limits shifting care from hospitalization to outpatient monitoring.|The veterinarian recommended inpatient fluids but created an outpatient recheck path when the owner could not do the full hospital plan.|options,money,alt,pay,staged,risk,rep,barrier,min
436714|Zoe|Dog|Tail-base pain and skin irritation|1|The veterinarian favored conservative treatment without immediate escalation.|The plan used pain control and topical medication with monitoring rather than immediate imaging or a heavier workup.|options,staged,min
436718|Coco|Cat|Pleural-effusion hospitalization update|1|The veterinarian discussed guarded options and why home timing mattered.|The conversation explained prognosis, monitoring, and whether going home the next morning was reasonable once the cat stabilized.|options,staged,risk
448022|Rocket|Dog|Kennel cough and minor skin-tag follow-up|1|The veterinarian kept the plan simple and outpatient.|Supportive cough management and daycare restriction were emphasized, with minor procedures deferred if needed later.|options,staged,min
466201|Chula|Dog|Eye injury with allergy overlap|1|The veterinarian used focused eye care while adjusting concurrent allergy treatment.|The plan combined stain-based eye treatment with anti-inflammatory support and allergy-medication adjustment.|options,staged,rep
483360|Gracie|Cat|Severe dyspnea and pleural effusion|1|This was a high-severity case where the conversation was dominated by prognosis.|The veterinarian discussed serious respiratory compromise and likely end-stage options, so it did not function like a normal affordability-spectrum visit.|nooption,risk
483538|Murphy|Dog|Vaccines with skin and flea discussion|1|The veterinarian handled several low-stakes issues in a routine visit.|The conversation included vaccines, skin treatment, and prevention choices without a clear affordability conflict.|options,staged
491505|Stra|Cat|Neurologic young-cat hospitalization|1|The veterinarian offered supportive care while being direct about prognosis.|The plan used fluids and empiric treatment first while explaining the poor outlook if the patient failed to respond quickly.|options,staged,risk
500816|Cookie|Dog|Head mass and aspirate decision|1|The veterinarian separated diagnosis now from removal later.|The discussion contrasted aspirating the mass now with leaving it alone until a future anesthesia event if it stayed benign-looking.|options,staged,min
509507|Apollo|Dog|Giardia and hookworm treatment|1|The veterinarian built a practical outpatient parasite plan.|The plan used Panacur, adjunct medication, and fiber support with testing or treating the other dog if needed.|options,staged
518345|Paxton|Dog|Seizure management and rescue-med planning|1|The veterinarian used medication sequencing before adding another chronic anticonvulsant.|The discussion covered immediate-release Keppra for clusters and potassium bromide as the next option if the current regimen failed.|options,staged,risk
520105|Riley|Dog|Vaccine-reaction planning and episodic nausea|1|The veterinarian adjusted routine care around prior reaction history.|The plan involved spacing vaccines, using omeprazole as needed, and keeping an anti-inflammatory backup rather than forcing all care at once.|options,staged,min
542854|Dudsy|Dog|New puppy vaccines and deworming plan|1|The veterinarian staged prevention and parasite decisions in a routine puppy visit.|The discussion covered vaccine timing, fecal testing versus empiric deworming, and home-care advice without overt cost pressure.|options,staged
560625|Klara|Cat|Hindlimb sprain management|1|The veterinarian used simple conservative care because the case did not yet justify more.|The plan relied on pain relief and rest with recheck boundaries rather than immediate advanced imaging.|options,staged,min
560626|Samson|Dog|Bloody nose and likely dental or sinus infection|1|The veterinarian used a temporizing medical step while explaining why dental work might still be needed.|An injectable antibiotic was used to buy time, but the veterinarian made clear that dental imaging or procedure might still be required.|options,staged,risk,min
568954|Luna|Dog|Chronic ears and allergy management|1|The veterinarian used lower-intensity environmental and diet tools before pushing harder treatment.|The plan included cleaners, wipes, and diet changes as a staged allergy approach.|options,staged,min
572391|Cayde|Dog|Dental consult and likely extraction planning|1|This was mostly a straightforward procedural consult.|The veterinarian assessed the mouth and likely extraction need without a substantial affordability or alternative-path discussion.|nooption
639863|Buddy|Dog|Seizure history, allergy meds, and rabies interval|1|The veterinarian covered several preventive and chronic-care options in one visit.|The discussion included safe antihistamine choices, possible diet trial later, and a one-year versus three-year rabies decision.|options,staged
666922|Charlie|Cat|Weight loss and glucose-curve planning|1|The veterinarian used a practical, lower-cost logistics move inside a chronic-workup visit.|The discussion included send-out lab efficiency, curve planning, and chronic monitoring choices.|options,money,pay,staged
674772|James|Dog|Vaccine timing and owner preference visit|1|The main issue was owner preference, not affordability.|The conversation was mostly about annual vaccine wishes and routine preventive care rather than a meaningful cost-of-care negotiation.|options,staged
683637|Pippen|Dog|Boarding and vaccine discussion|1|This was a fragmented routine visit with limited analytic value for Andy's question.|The transcript mostly covered boarding logistics and routine prevention rather than affordability or decline management.|nooption
702647|Louie|Dog|Post-scope foreign-body update|1|A narrow follow-up where meaningful alternatives were no longer the issue.|The conversation focused on recovery expectations after removing the obstruction rather than choosing between care paths.|nooption
727698|Maki|Cat|Rapid breathing and chest x-ray recommendation|1|The veterinarian made the imaging decision and its cost visible without losing urgency.|The visit included an explicit x-ray quote and explained why chest imaging mattered given the breathing pattern.|options,money,staged,risk,rep
747077|Bruno and Brewer|Dog|Fecal pending and GI guidance|1|The veterinarian used a watchful outpatient path with room to escalate.|The conversation covered deworming possibilities, monitoring, and follow-up rather than a larger immediate workup.|options,staged,min
747094|Cosmo|Dog|Senior wellness and urine or vaccine review|1|This was essentially a routine preventive visit.|The conversation stayed on senior wellness topics and routine decisions without a meaningful affordability branch.|nooption
770181|Callie|Dog|Routine vaccine wellness visit|1|A straightforward annual with no material option conflict.|The visit was preventive and brief, so there was no meaningful lower-cost or decline conversation to code.|nooption
806708|Desecrater|Dog|Wellness visit with new heart murmur|1|The veterinarian kept the plan conservative while introducing a new concern.|The discussion used bloodwork and monitoring as first steps and suggested more frequent follow-up if the murmur became clinically important.|options,staged,min
814316|Momo|Cat|Very short wellness note|1|This transcript is too slight to function as a tradeoff conversation.|The text was brief routine-note material, so there was no meaningful options set to code.|nooption
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
      title: 'Andy Hand-Coded Batch 3',
      date: '2026-03-18',
      selectionSeed: '20260318-wave3',
      selectionMethod: 'Third non-overlapping 100-transcript hand-coded batch from the Transcripts folder using a reproducible seeded sample.',
      memoPath: 'Andy_200_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
