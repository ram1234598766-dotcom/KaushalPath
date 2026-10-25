-- Smoke-test fixture only. It is not a complete CBSE or NCERT catalog.
INSERT INTO syllabus_catalog (class_level,subject_key,structure_json) VALUES
(12,'physics',json('{"schemaVersion":1,"board":"CBSE","classLevel":12,"subject":{"id":"physics","name":"Physics"},"chapters":[{"id":"electric-charges-and-fields","order":1,"name":"Electric Charges and Fields","topics":[{"id":"electric-charge","name":"Electric charge"},{"id":"coulombs-law","name":"Coulomb''s law"}]}]}'))
ON CONFLICT(class_level,subject_key) DO UPDATE SET structure_json=excluded.structure_json,updated_at=CURRENT_TIMESTAMP;
INSERT INTO formula_catalog (class_level,subject_key,content_json) VALUES
(12,'chemistry',json('{"schemaVersion":1,"board":"CBSE","classLevel":12,"subject":{"id":"chemistry","name":"Chemistry"},"blocks":[{"id":"nernst-equation","chapter":"Electrochemistry","title":"Nernst equation at 298 K","formula":"E_cell = E°_cell - (0.0591/n) log10(Q)"}]}'))
ON CONFLICT(class_level,subject_key) DO UPDATE SET content_json=excluded.content_json,updated_at=CURRENT_TIMESTAMP;
INSERT INTO questions(id,subject,chapter,topic,difficulty,question_text,options_json,correct_option,is_pyq)
VALUES('demo-cbse12-physics-coulomb-001','Physics','Electric Charges and Fields','Coulomb''s law','easy','When separation is fixed, Coulomb force magnitude is proportional to which quantity?','["The sum of the charges","The product of charge magnitudes","The square of separation","The inverse of each charge separately"]','B',0)
ON CONFLICT(id) DO UPDATE SET question_text=excluded.question_text;