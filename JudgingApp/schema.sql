CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE judges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judgeId VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    date DATE
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    file_path VARCHAR(255),
    event_id INT,
    user_id INT,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judge_id INT,
    project_id INT,
    creativity DECIMAL(5,2),
    impact DECIMAL(5,2),
    execution DECIMAL(5,2),
    feasibility DECIMAL(5,2),
    design DECIMAL(5,2),
    final_score DECIMAL(5,2),
    feedback TEXT,
    FOREIGN KEY (judge_id) REFERENCES judges(id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);