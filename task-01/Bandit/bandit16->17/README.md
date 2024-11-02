# Bandit 16-17

**CODE**: ` ktfgBvpMzWKR5ENj26IbLGSblgUG9CzB`

## Learned commands

- ` nmap` namp is used to discover hosts and services on a computer network by sending packets and analyzing the responses.
- `netcat` Netcat is a networking tool for reading from and writing to network connections

## Approach

- `nmap localhost -p 31000-32000` here we listen the port from 31000 - 32000
- `nmap localhost -p 31046,31518,31691,31790,31960 -sV -T4` here we used to make listen at partical port so that we will able to get the service version and the time speed of `T4`
- `ncat --ssl localhost 31790` 
