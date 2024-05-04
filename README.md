Synthify: Generate Synthesized Datasets with a No-Code UI

![Synthify](cover.png)

### Quick Start Guide

Welcome to Synthify! Follow these steps to get started quickly:

#### Step 1: Setting up Domains

To run Synthify locally, you'll need to set up some fake domains.

1. **For macOS:**
   - Open Terminal.
   - Type `sudo nano /etc/hosts` and press Enter.
   - Add these lines to the end of the file:
     ```
     127.0.0.1 pb.synthify.io
     127.0.0.1 backend.synthify.io
     127.0.0.1 party.synthify.io
     127.0.0.1 synthify.io
     ```
   - Save and exit.

2. **For Windows and Linux:**  
   - Google "How to edit hosts file [your operating system]" for instructions.

#### Step 2: Running Synthify

Now, let's start Synthify using Docker:

1. Make sure you have Docker installed. If not, download and install it from [here](https://www.docker.com/get-started).

2. Open Terminal or Command Prompt.

3. Type `docker-compose up -d` and press Enter. 

#### Step 3: Enjoy Synthify!

1. Open [http://synthify.io](http://synthify.io) in your browser.

2. Set up a user.

3. You're all set to enjoy Synthify!

### Contributing

We love contributions! Feel free to open issues, submit pull requests, or suggest new features on our [GitHub repository](https://github.com/amirrezasalimi/synthify).

### License

Synthify is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode). Refer to the [LICENSE](LICENSE) file for more details.

This license allows you to share and adapt the material for non-commercial purposes under certain conditions.
