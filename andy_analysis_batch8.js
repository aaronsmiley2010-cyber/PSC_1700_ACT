window.ANDY_ANALYSIS_BATCH8 = (() => {
  const rows = `
6657|Teddy|Dog|Recurrent diarrhea with conservative GI support|1|The veterinarian used a minimum-responsible outpatient GI plan rather than jumping to heavier testing.|The discussion paired a send-out fecal with stool-firming probiotics and a slower transition back to regular food.|options,staged,min
6659|Lilo|Dog|Diabetes and eye-disease management|1|The veterinarian staged a chronic case instead of pretending there was one simple fix.|The discussion covered insulin adjustment, eye concerns, and specialist-level escalation while keeping the risks visible.|options,staged,risk,rep
6663|Winter|Dog|Puppy preventive scheduling visit|1|Routine puppy care still involved practical stepwise planning.|The discussion moved through vaccine timing and early preventive guidance rather than a meaningful affordability conflict.|options,staged
6682|Hachi|Dog|Bloody-diarrhea evaluation with outpatient plan|1|The veterinarian balanced a common emergency complaint with staged next steps.|The plan covered GI support and diagnostic escalation while explaining why worsening signs would matter.|options,staged,risk
6683|Cookie|Dog|Conjunctivitis workup with stain-first approach|1|The veterinarian used an exam-first eye plan before committing to stronger treatment.|The discussion contrasted stain findings, antibiotic choice, and follow-up logic while keeping eye risk in view.|options,staged,risk
6684|Penny|Dog|Back-pain and neurologic concern|1|The veterinarian treated a painful mobility case with staged diagnostics and caution.|The plan moved through screening blood work, pain control, and neurologic concern while making the downside visible.|options,staged,risk,rep
6686|Braxton|Dog|Painful wrist with priced x-ray plan|1|This was a practical orthopedic conversation with visible cost talk.|The veterinarian discussed sedation, x-rays, and what the workup would cost while keeping injury seriousness visible.|options,money,staged,risk
6687|Fenrir|Dog|Dog-bite wound infection follow-up|1|The veterinarian used layered wound management rather than a one-step answer.|The discussion covered culture, antibiotic choice, and local care while explaining why infection control still mattered.|options,staged,risk
6695|Coco|Dog|Routine spay and patella counseling visit|1|This was mainly a preventive visit where alternatives were not really the issue.|The encounter focused on routine planning and incidental orthopedic counseling rather than a meaningful cost-of-care branch.|nooption
6699|Olive|Dog|Allergy flare with injection-versus-pill options|1|The veterinarian used several workable chronic-itch paths instead of one rigid answer.|The discussion moved through Cytopoint, Apoquel, and supportive allergy management in a staged way.|options,staged
6703|Olive|Dog|Preventive choice between monthly and bundled products|1|Routine prevention still included a real choice architecture.|The conversation compared combinations such as ProHeart, Bravecto, and Trio while keeping the visit otherwise straightforward.|options,staged
6705|Sibley|Cat|Kitten booster and deworming follow-up|1|Routine kitten care still involved sequencing rather than all-at-once care.|The visit covered deworming, fecal recheck, and the next vaccine interval in a staged preventive plan.|options,staged
6707|Cali|Cat|Vomiting and abdominal-mass workup|1|The veterinarian handled a serious abdominal case through staged outpatient reasoning.|The discussion moved through likely mass disease, supportive care, and escalation while keeping the risk profile clear.|options,staged,risk,rep
6714|Gina and Izzy|Cat|Vomiting cat with dental-versus-GI branching|1|The veterinarian compared plausible causes instead of forcing one explanation.|The discussion moved through diet, probiotics, dental disease, and further workup while making medical uncertainty visible.|options,staged,risk
6731|Meesha|Cat|UTI follow-up and monitor-only recheck|1|This was a straightforward recheck where alternatives were not really the issue.|The visit mainly confirmed improvement and did not require a new affordability or care-path branch.|nooption
6746|Garfield|Dog|Severe low-glucose emergency triage|1|This is a strong example of serious staged care under clear strain.|The veterinarian worked through emergency diagnostics and treatment while keeping the clinical risk and instability obvious.|options,staged,risk,barrier,rep
6896|Moonie|Dog|Abscess recheck with incremental treatment adjustment|1|The veterinarian adjusted a healing case rather than resetting the whole plan.|The discussion covered wound progress, medication support, and when additional treatment would be needed.|options,staged
6897|Gorda|Cat|Spay-incision repair with sedation-versus-awake tradeoff|1|This is a clear example of medically responsible branching with cost visibility.|The veterinarian contrasted awake staple placement with sedation and suturing, explained the downside, and named the price difference.|options,money,staged,risk,barrier,rep
6956|Pookie|Dog|Localized skin-fold infection visit|1|This was a focused skin visit where alternatives were not really the issue.|The encounter centered on direct treatment of a local dermatitis problem without a larger affordability branch.|nooption
6979|Simba|Dog|Chronic dermatitis with medication and diet choices|1|The veterinarian built a layered skin plan instead of promising one fix.|The discussion moved through steroids, Apoquel, diet, and infection control while keeping chronic-allergy logic visible.|options,staged,risk
6982|Gracie|Dog|Hematuria workup planning|1|The veterinarian handled urinary signs through staged diagnostics rather than assumptions.|The discussion pointed toward urine-based workup and explained why the urinary signs warranted caution.|options,staged,risk
6984|Bosco|Dog|Anxiety and possible seizure concern|1|The veterinarian treated an odd neurologic history with staged next steps.|The discussion covered blood pressure, blood work, and medication options while keeping diagnostic uncertainty visible.|options,staged,risk
6990|Kona|Dog|Rabies-only wellness update|1|This was a routine vaccine visit where alternatives were not really the issue.|The encounter focused on basic preventive maintenance rather than a meaningful care-path branch.|nooption
7003|Ricky|Dog|Brief annual and maintenance injection visit|1|This was a routine maintenance visit where alternatives were not really the issue.|The transcript is brief and does not show a meaningful affordability or lower-cost branch.|nooption
7516|Odie|Dog|GI upset with supportive-first outpatient care|1|The veterinarian started with a workable outpatient path while keeping escalation available.|The discussion centered on conservative GI management and what would justify moving to more diagnostics.|options,staged,risk
7518|Gem|Dog|Acute limp with rest-versus-x-ray decision|1|The veterinarian used staged orthopedic reasoning rather than reflexive escalation.|The discussion contrasted conservative rest and pain control against imaging if the lameness persisted.|options,staged,risk
7519|Joey|Dog|Limping dog with patella and murmur findings|1|The veterinarian staged an orthopedic plan while naming other age-related findings.|The discussion balanced lameness management with new cardiac context and appropriate caution.|options,staged,risk
7792|Nena|Dog|Yeasty paw dermatitis management|1|The veterinarian used several workable skin-treatment routes instead of one rigid answer.|The discussion moved through topical care, oral treatment, and itch control in a staged way.|options,staged
7797|Lucy|Dog|Senior wellness with murmur and arthritis context|1|This was mostly a maintenance visit where alternatives were not really the issue.|The encounter focused on routine senior care while acknowledging chronic-caution findings such as murmur and mobility changes.|nooption,risk
7808|Tazz|Dog|Diabetic annual monitoring visit|1|This was a straightforward chronic-maintenance visit where alternatives were not really the issue.|The encounter centered on routine diabetic follow-up and Libre management rather than a broader care-path negotiation.|nooption
7821|Jack|Dog|Reactive-dog vaccine handling visit|1|This was largely a handling and maintenance visit where alternatives were not really the issue.|The encounter focused on getting routine care done safely for a reactive dog rather than a meaningful affordability branch.|nooption
7831|Max|Dog|Head tilt and high-blood-pressure follow-up|1|The veterinarian used staged chronic-neurologic reasoning with clear caution.|The discussion covered medication changes, blood pressure control, and recheck logic while keeping the downside visible.|options,staged,risk,rep
7837|Pecan|Cat|Senior itch and appetite visit with cardiac caution|1|The veterinarian balanced several chronic-care options without oversimplifying the case.|The discussion moved through Solensia, diet support, and steroid caution because of concurrent heart disease.|options,staged,risk
7846|Sharpie|Cat|Routine visit with optional senior blood work|1|This was a mild cost-visible preventive conversation rather than a crisis case.|The veterinarian named the blood-work price and framed it as an optional staged step at a routine visit.|options,money,staged
7848|Lexi|Dog|Boarding-prep vaccine visit|1|This was a routine preventive visit where alternatives were not really the issue.|The encounter focused on vaccination readiness and maintenance without a meaningful lower-cost branch.|nooption
7850|Chase|Dog|Routine vaccines and Librela visit|1|This was a straightforward maintenance visit where alternatives were not really the issue.|The encounter focused on routine preventive and chronic-joint support without a broader spectrum-of-care conversation.|nooption
7851|Jack|Dog|Routine vaccines with outside-prescription refill|1|This was mainly a maintenance visit but it still included a practical access move.|The visit was routine overall, with the main branch being a written prevention prescription for use outside the clinic.|nooption,pay
7954|Coco|Cat|Annual visit with owner concern about blood-work timing|1|This was a preventive visit where cost surfaced more than actual care branching.|The discussion noted financial concern around senior blood work but did not show a larger alternative treatment pathway.|money,nooption
7963|Pebbles|Cat|Fever and anorexia with hospitalization-versus-outpatient tradeoff|1|This is a strong example of staged care with visible cost and monitoring limits.|The veterinarian compared outpatient treatment against 24-hour hospitalization, named the financial reality, and kept the medical risk clear.|options,money,staged,risk,barrier,rep
7975|Bella and Angelina|Cat|Kitten booster scheduling visit|1|Routine kitten care still involved deliberate sequencing.|The discussion centered on booster timing and preventive follow-through rather than a meaningful affordability conflict.|options,staged
7988|Maverick|Dog|Dog-bite wound with sedation and repair choices|1|The veterinarian matched the wound plan to both injury severity and patient limits.|The discussion covered local repair, sedation considerations, and imaging tradeoffs while keeping medical downside visible.|options,money,staged,risk
7993|Nelly|Dog|Allergy care with written script and pharmacy savings|1|This is a clean example of treatment branching plus lower-cost logistics.|The veterinarian compared itch-control paths and explicitly used outside-pharmacy options such as GoodRx-style savings to make the plan workable.|options,money,pay,pharmacy,staged
8000|Hulk Finn|Dog|Hot-spot visit treated with local care first|1|The veterinarian used a minimum-responsible skin plan instead of over-treating.|The discussion favored topical treatment and an e-collar over jumping straight to broader medication.|options,staged,min
8031|Rocket|Dog|Limber-tail pain with supportive-first plan|1|The veterinarian kept imaging available but started with conservative care.|The discussion used pain control, rest, and monitoring first while explaining why escalation could still be needed.|options,staged,risk
8032|Belle|Dog|Severe allergy flare with multiple medication choices|1|The veterinarian used layered itch control instead of a one-track answer.|The discussion compared pill forms, injection options, and infection control while making the downside visible.|options,money,staged,risk
8033|Boogie|Cat|Lower-urinary-signs case with inpatient-versus-outpatient branching|1|The veterinarian built a staged urinary plan around both risk and feasibility.|The discussion compared catheterization and hospital care against outpatient management while keeping obstruction risk visible.|options,staged,risk,barrier
8039|Karma|Dog|Advanced limb disease and comfort-care discussion|1|This was a serious palliative discussion where alternatives were not really the issue.|The encounter centered on comfort and likely decline rather than a broad affordability or spectrum-of-care branch.|nooption,risk
8151|Ellie|Dog|Vomiting dog with x-ray and supportive-care options|1|The veterinarian used a staged GI plan while keeping abdominal risk visible.|The discussion covered pain, nausea control, imaging, and home monitoring rather than a one-step answer.|options,staged,risk
8152|Atos|Dog|Puppy urinary-crystal visit with prevention planning|1|The veterinarian handled a young-dog urinary issue through staged conservative care.|The discussion paired antibiotics and urinary support with vaccine timing and follow-up caution.|options,staged,risk
8153|Nico|Dog|Chronic ruptured cyst with surgery pricing|1|The veterinarian built a pragmatic bridge from medical management to surgery.|The discussion covered antibiotics, wound care, and a price-visible surgical next step while keeping the burden realistic.|options,money,staged,risk,barrier
9106|Vinny|Dog|Reactive-dog maintenance visit with written script|1|This was mainly a handling and maintenance visit with one practical access move.|The encounter focused on safe routine care, with the main branch being a written prevention prescription.|nooption,pay
9116|Campbell|Dog|Senior annual itch-maintenance visit|1|This was largely a chronic-maintenance visit where alternatives were not really the issue.|The encounter focused on ongoing allergy and prevention management without a meaningful new care-path negotiation.|nooption
9125|Maverick|Dog|Kennel-cough case with pneumonia rule-out logic|1|The veterinarian used staged respiratory reasoning rather than assuming a simple cough.|The discussion covered x-rays, antibiotic support, and what would justify more concern.|options,staged,risk
9129|Tank|Dog|Chronic skin flare with diet and itch-control decisions|1|The veterinarian revised a chronic-allergy plan rather than repeating old steps blindly.|The discussion moved through Apoquel concerns, diet strategy, and infection control with visible caution.|options,staged,risk
9139|Loki|Cat|Short wellness and vaccine visit|1|This was a straightforward preventive visit where alternatives were not really the issue.|The transcript is brief and does not show a meaningful affordability or care-path branch.|nooption
9144|Kirby|Dog|Lyme follow-up and preventive planning|1|The veterinarian used stepwise chronic monitoring rather than overreacting to a recheck.|The discussion balanced vaccine and prevention planning with Lyme-related caution and follow-up.|options,staged,risk
9152|Korver|Dog|Reverse-sneezing and clotting-workup discussion|1|The veterinarian staged a mild upper-airway case without losing sight of the differential.|The discussion covered supportive treatment and further testing in a measured sequence.|options,staged
9175|Pepper|Cat|Overgrooming case with itch-versus-behavior framing|1|The veterinarian compared plausible chronic causes instead of forcing one answer.|The discussion moved through prednisolone, dental timing, and anxiety-versus-allergy reasoning while keeping risk visible.|options,staged,risk
9271|Penny|Dog|Lick-granuloma visit with cytology-first reasoning|1|The veterinarian used a focused staged skin workup instead of guessing.|The discussion paired cytology and treatment planning while keeping the lesion source open for now.|options,staged
9282|Lily|Dog|Allergy maintenance with script logistics and parasite question|1|The veterinarian combined chronic-allergy planning with a practical medication path.|The discussion covered ongoing itch management, written prescription logistics, and why other infectious concerns mattered less.|options,money,pay,staged,risk
9287|Teddy|Dog|Recurring diarrhea with fecal recheck and probiotic plan|1|The veterinarian stayed conservative and minimum-responsible for a common GI flare.|The discussion used fecal testing, probiotics, and a slower food transition instead of jumping to a heavier workup.|options,staged,min
9293|Sibley|Cat|Routine kitten booster and fecal follow-up|1|Routine kitten care still involved sequencing and preventive follow-through.|The discussion covered deworming, one more fecal check, and the next booster timing in a staged way.|options,staged
9330|Romero|Dog|Paw-licking allergy case with pill-versus-injection choice|1|This was a clear chronic-itch conversation with visible price framing.|The veterinarian compared Apoquel and Cytopoint, named the pricing equivalence, and built a practical skin-management plan around owner preference.|options,money,staged
9344|Spike|Dog|Localized hot-spot treatment with topical-first logic|1|The veterinarian used minimum-responsible local treatment instead of over-escalating.|The discussion favored clipping and topical spray while reserving broader antibiotics only if more sites were involved.|options,staged,min
9460|Ranger|Dog|Anxiety and allergy visit with food-trial discussion|1|The veterinarian built several workable chronic-care paths around a difficult young dog.|The discussion compared Apoquel versus Cytopoint, over-the-counter versus hydrolyzed diet strategy, and training-related realities.|options,staged,barrier
9496|Cosmo|Cat|Routine senior wellness and nail-trim visit|1|This was a straightforward maintenance visit where alternatives were not really the issue.|The encounter focused on routine blood work and nail care without a meaningful affordability branch.|nooption
9497|Cosmo|Cat|Duplicate routine senior wellness visit|1|This file reads like a duplicate routine maintenance capture rather than a fresh options discussion.|The encounter is effectively the same wellness and nail-trim visit without a meaningful new branch.|nooption
9529|Ernest|Dog|Acute back-pain visit with injection-first support|1|The veterinarian used a conservative but risk-aware musculoskeletal plan.|The discussion paired an in-clinic pain injection with home medications and reserved x-rays for failure to improve.|options,staged,risk,min
9545|Capone|Dog|Chronic ear case with surgery estimate and diet script|1|This was a practical chronic-care visit with both pricing and access logistics.|The veterinarian priced mass removals, scheduled surgery, and used a written diet prescription to expand where the owner could obtain food.|options,money,pay,staged
9560|Thor|Dog|Itchy skin and eyes with medication-choice conversation|1|The veterinarian built a layered allergy plan rather than relying on one intervention.|The discussion compared Apoquel and Cytopoint, added soothing eye medication, and walked through relevant side-effect tradeoffs.|options,staged,risk
9593|Wrigley|Dog|Seasonal allergy case with eye and skin support|1|The veterinarian used a clear chronic-itch choice architecture with downside framing.|The discussion compared Apoquel and Cytopoint, added eye drops, and explained why the chosen route fit the owner's concern about side effects.|options,staged,risk
9619|Purrl|Cat|Annual rabies and nail-trim visit|1|This was a routine feline wellness visit where alternatives were not really the issue.|The encounter focused on preventive maintenance and gentle handling rather than a meaningful spectrum-of-care branch.|nooption
9647|Bambino|Dog|Mobility decline with medication-adjustment plan|1|The veterinarian adjusted chronic pain management rather than layering on unnecessary procedures.|The discussion focused on changing gabapentin timing, continuing anti-inflammatory support, and respecting the dog's stress limits around laser therapy.|options,staged,barrier
9914|Toni|Dog|Narrated annual vaccine visit|1|This file is essentially a routine wellness summary rather than an options conversation.|The content is a straightforward preventive narration with no meaningful affordability or branching discussion.|nooption
10052|Bella|Dog|Pre-room diarrhea planning for a cost-sensitive case|1|This internal planning note still shows minimum-responsible diagnostic staging under constraint.|The veterinarian explicitly favored fecal testing first, explained why broader lab work might not change treatment, and named the role of financial pressure.|options,money,staged,min,barrier,rep
10069|Rosie|Dog|UTI case with injectable-first treatment path|1|The veterinarian used a conservative urinary plan while keeping escalation ready.|The discussion started with an injectable antibiotic, explained when culture or oral change would be needed, and set a clear recheck window.|options,staged,risk,min
10100|Laci|Dog|Vestibular crisis with blood-pressure branching|1|This is a strong example of serious staged care with explicit quality-of-life framing.|The veterinarian distinguished old-dog vestibular disease from blood-pressure-related stroke signs, treated nausea, and named the threshold for palliative reconsideration.|options,staged,risk,rep
10126|Bull|Dog|Routine vaccines and heartworm test visit|1|This was a straightforward preventive visit where alternatives were not really the issue.|The encounter focused on vaccines, heartworm testing, and routine safety checks without a meaningful care-path branch.|nooption
10177|Everett|Dog|Internal Cushing workup planning note|1|This planning transcript still shows staged endocrine reasoning rather than reflex treatment.|The discussion moved through urine, blood pressure, and delayed testing logic while explaining why empiric therapy would be risky.|options,staged,risk
11370|Bandit|Cat|Sedation and wound-repair procedure note|1|This file is a procedure note rather than a meaningful owner-facing options conversation.|The content documents wound closure and ear treatment without a real affordability or care-path negotiation.|nooption
11371|Milo|Cat|Diabetic cat with blood-work estimate and ketone concern|1|This is a strong example of stepwise internal medicine care with visible cost talk.|The veterinarian started with blood work, urine, and ketones, gave a price estimate, and explained why diabetic decline needed urgent but staged evaluation.|options,money,staged,risk,barrier,rep
11372|Wilson|Dog|Bleeding oral-mass case awaiting biopsy|1|This is a serious staged-care conversation with clear limits and uncertainty.|The veterinarian focused on stopping bleeding, checking red-cell status, and possibly giving blood while preserving enough time to get the biopsy answer.|options,staged,risk,barrier,rep
11373|Winnie|Dog|Snoring crisis with x-ray-first upper-airway plan|1|The veterinarian used a minimum-responsible respiratory workup before adding treatment.|The discussion started with chest radiographs, then moved to steroids, steam, and coupage only after major findings were ruled out.|options,staged,risk,min
11679|Luci|Dog|Allergy visit choosing injection over pills|1|The veterinarian used a practical chronic-itch plan suited to owner handling realities.|The discussion compared Apoquel and Cytopoint, chose the injection path, and added wipes and bathing support.|options,staged
11715|Paisley|Dog|Suspected sock obstruction with fluids-versus-surgery branch|1|This is a strong example of staged obstruction management.|The veterinarian used x-rays first, explained when fluids might be enough, and was explicit that surgery becomes the right move if the object does not progress.|options,staged,risk,rep
11783|Smoochie|Cat|Urine-first workup for litter-box changes|1|The veterinarian used a minimum-responsible diagnostic sequence rather than a broader shotgun workup.|The discussion started with in-house urine testing, kept blood work as the next step only if needed, and then layered in environmental advice for the new kitten stressor.|options,staged,min
11788|Summer|Dog|Puppy diarrhea with probiotic-first management|1|This is a clean minimum-responsible GI conversation.|The veterinarian held metronidazole unless a parasite test justified it, used probiotics and GI food support, and reserved allergy-diet conclusions for later.|options,staged,min,rep
11844|Paxton and Naya|Dog|Routine boarding-clearance visit|1|This was a preventive maintenance visit where alternatives were not really the issue.|The encounter focused on exam status, vaccine records, and boarding readiness without a meaningful spectrum-of-care branch.|nooption
11861|Rocket|Dog|Crusty allergy flare with second injection and antibiotics|1|The veterinarian used a layered chronic-skin plan rather than a one-shot answer.|The discussion paired repeat Cytopoint, oral antibiotics, diet transition, and dry-shampoo support while keeping the skin-barrier rationale visible.|options,staged,risk
12023|Jack|Dog|Palliative oral-pain visit in a declining senior|1|This was mainly a comfort-care conversation where alternatives were not really the issue.|The encounter focused on pain control, antibiotic support, nail care, and quality-of-life framing for an advanced chronic case.|nooption,risk
12041|Huey|Dog|Behavioral urination with medical-rule-out first|1|The veterinarian started with a minimum-responsible medical check before labeling the problem behavioral.|The discussion used urine testing and bladder assessment first, then moved to training structure and only later considered anxiety medication if needed.|options,staged,min,barrier
12144|Tucker|Dog|Cardiac-medication wellness and food question|1|This was mainly a maintenance visit where alternatives were not really the issue.|The encounter focused on wellness blood work, chronic medication monitoring, and general food guidance rather than a true cost-of-care branch.|nooption
12455|Luna|Cat|Dental estimate with cleaning-versus-extraction range|1|This was a practical procedural-planning visit with visible price framing.|The veterinarian explained the low-end cleaning plan versus the higher-end extraction scenario based on dental x-rays and root findings.|options,money,staged,risk
12553|Winnie|Dog|Foreign-body surgery note|1|This file is an operative note rather than a meaningful owner-facing care-path conversation.|The content documents surgery details without a real affordability or option-setting discussion to code.|nooption
12577|Fairbanks|Dog|Chronic whole-body allergy management and skin support|1|The veterinarian framed the itch problem through several plausible drivers instead of one guess.|The discussion covered Cytopoint, medicated shampoo, antihistamine doses, and flea-control logic while keeping chronic-allergy risk visible.|options,staged,risk
13205|Murphy|Dog|Apoquel-side-effect case pivoting to Cytopoint|1|The veterinarian adapted the allergy plan to a GI-sensitive dog rather than forcing the same medication.|The discussion moved from effective-but-problematic Apoquel to Cytopoint, wipes, fiber support, and trazodone for future handling stress.|options,staged,risk,barrier
13262|Ferdinand|Cat|Periuria case with crystals-first and behavior-second plan|1|The veterinarian staged the problem carefully instead of calling it behavioral too early.|The discussion started with urine recheck for crystals, then moved through supplements and only later considered behavioral medication with dose caution.|options,staged,risk,barrier,rep
13273|Emma|Cat|Obesity-related pain visit with calorie recalculation and Solensia|1|The veterinarian used practical math and supportive care instead of vague weight-loss advice.|The discussion recalculated calories, cut the diet to a measurable target, and added arthritis support while keeping weight loss as the main fix.|options,staged,risk,min
13360|Chief|Dog|Vaccine-start visit during ear-infection follow-up|1|This was mostly a preventive catch-up visit where alternatives were not really the issue.|The encounter focused on vaccine sequencing, continuing ear medication, and optional neuter scheduling rather than a meaningful lower-cost branch.|nooption
13419|Leo|Dog|Sneezing senior with handle-or-treat empirically decision|1|The veterinarian matched the plan to both likely disease and the dog's handling limits.|The discussion contrasted muzzle-assisted exam versus empiric antibiotic treatment for probable dental sinusitis while keeping senior-dog risk and stress in view.|options,staged,risk,barrier
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
      title: 'Andy Hand-Coded Batch 8',
      date: '2026-03-18',
      selectionSeed: '20260318-wave8',
      selectionMethod: 'Eighth non-overlapping 100-transcript hand-coded batch from the Transcripts folder using the uncoded backlog manifest.',
      memoPath: 'Andy_700_Transcript_Analysis.md',
      ids: transcripts.map((item) => item.id)
    },
    transcripts
  };
})();
