create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    heading VARCHAR(255),
    content VARCHAR(10000),
    created_at time,
    updated_at time,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);