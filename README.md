## Typescript configuration in production
# Intialiasing typescript
tsc --init
This wil create a new tsconfig.json file
# Generate node package.son file
npm init -y
# create index.html file
load a script file 
# Create src and distribution files
Src file is one you write your code
Dist goes to production - served to end user
# Create index.ts in  src file
index.js is automatically generated in dist file
Locate the src in script file to index.js file in dist folder
src="./dist/index.js"
# Opening the output directory in tsconfig.json file
Configure it to dist directory
outDir: "./dist"
# Compile the typescript file
tsc src/index.ts
# watch mode
tsc -w
#live server installation
npm -i lite server
