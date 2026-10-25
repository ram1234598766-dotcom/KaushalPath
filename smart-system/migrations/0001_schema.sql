-- KaushalPath Smart System D1 schema; no raw student progress is stored here.
CREATE TABLE IF NOT EXISTS questions (
 id TEXT PRIMARY KEY NOT NULL CHECK(length(id) BETWEEN 1 AND 128),
 subject TEXT NOT NULL CHECK(length(trim(subject)) BETWEEN 1 AND 80),
 chapter TEXT NOT NULL CHECK(length(trim(chapter)) BETWEEN 1 AND 160),
 topic TEXT NOT NULL CHECK(length(trim(topic)) BETWEEN 1 AND 160),
 difficulty TEXT NOT NULL CHECK(difficulty IN ('easy','medium','hard')),
 question_text TEXT NOT NULL CHECK(length(trim(question_text)) BETWEEN 1 AND 20000),
 options_json TEXT NOT NULL CHECK(json_valid(options_json) AND json_type(options_json)='array'),
 correct_option TEXT NOT NULL CHECK(length(trim(correct_option)) BETWEEN 1 AND 32),
 is_pyq INTEGER NOT NULL DEFAULT 0 CHECK(is_pyq IN (0,1)),
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS questions_taxonomy_idx ON questions(lower(trim(subject)),lower(trim(chapter)),lower(trim(topic)));
CREATE INDEX IF NOT EXISTS questions_pyq_idx ON questions(is_pyq,subject,chapter);
CREATE TABLE IF NOT EXISTS global_analytics_v2 (
 question_id TEXT PRIMARY KEY NOT NULL,
 total_attempts INTEGER NOT NULL DEFAULT 0 CHECK(total_attempts>=0),
 correct_attempts INTEGER NOT NULL DEFAULT 0 CHECK(correct_attempts>=0 AND correct_attempts<=total_attempts),
 updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY(question_id) REFERENCES questions(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS global_analytics_v2_updated_idx ON global_analytics_v2(updated_at);
CREATE TABLE IF NOT EXISTS syllabus_catalog (
 class_level INTEGER NOT NULL CHECK(class_level IN (10,11,12)),
 subject_key TEXT NOT NULL CHECK(length(subject_key) BETWEEN 1 AND 80),
 structure_json TEXT NOT NULL CHECK(json_valid(structure_json)),
 updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY(class_level,subject_key)
);
CREATE TABLE IF NOT EXISTS formula_catalog (
 class_level INTEGER NOT NULL CHECK(class_level IN (10,11,12)),
 subject_key TEXT NOT NULL CHECK(length(subject_key) BETWEEN 1 AND 80),
 content_json TEXT NOT NULL CHECK(json_valid(content_json)),
 updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY(class_level,subject_key)
);