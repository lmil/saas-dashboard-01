evy
CHUNK 1: Create AuthContext (mock authentication state)
CHUNK 2: Add Login link to Navigation + dynamic links (show different links when logged in)
CHUNK 3: Update HomePage with "Get Started" and "Login" CTA buttons
CHUNK 4: Create Dashboard page + ProtectedRoute wrapper
CHUNK 5: Connect Login/Signup forms to actually trigger login + test complete flow

The Flow:

- Always start from main branch
- Create feature branch for each chunk/feature
- Make commits as we build
- Merge back to main when chunk is complete
- Repeat for next chunk

After EACH chunk we complete:
1. Save files
2. Test in browser
3. Git add + commit
4. Continue to next chunk