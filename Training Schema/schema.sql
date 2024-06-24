-- Database name: TrainingSchema

-- Step 1: Create a new schema
CREATE SCHEMA my_schema;

-- Step 2: Create the roles
CREATE ROLE readonly;
CREATE ROLE readwrite;

-- Step 3: Create the users and assign passwords
CREATE USER readonly_user WITH PASSWORD 'readonly_password';
CREATE USER readwrite_user WITH PASSWORD 'readwrite_password';

-- Step 4: Grant privileges to the roles
-- Grant read-only access
GRANT USAGE ON SCHEMA my_schema TO readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA my_schema TO readonly;
-- Ensure future tables will also have read-only access
ALTER DEFAULT PRIVILEGES IN SCHEMA my_schema GRANT SELECT ON TABLES TO readonly;


-- Grant read-write access
GRANT USAGE ON SCHEMA my_schema TO readwrite;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA my_schema TO readwrite;
-- Ensure future tables will also have read-write access
ALTER DEFAULT PRIVILEGES IN SCHEMA my_schema GRANT ALL PRIVILEGES ON TABLES TO readwrite;


-- Step 5: Assign roles to the users
GRANT readonly TO readonly_user;
GRANT readwrite TO readwrite_user;