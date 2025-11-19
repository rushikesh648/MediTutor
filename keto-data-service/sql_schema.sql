-- Snippet from sql_schema.sql
CREATE TABLE clinical_accessory (
    sku_id VARCHAR(10) PRIMARY KEY,
    accessory_name VARCHAR(100) NOT NULL,
    unit_cost_usd NUMERIC(10, 2) NOT NULL, 
    last_updated TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE patient_macro_log (
    log_id SERIAL PRIMARY KEY,
    patient_id VARCHAR(100) NOT NULL,
    carbs_grams INTEGER,
    fats_grams INTEGER,
    log_time TIMESTAMP NOT NULL
);
