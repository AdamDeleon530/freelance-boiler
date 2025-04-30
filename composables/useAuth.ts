

export const useAuth = () => {
    const user = useState<{} | null>('user')
    const supa = useSupabaseClient()
  
    const fetchUser = async () => {
      const { data } = await supa.auth.getUser()
      user.value = data.user
    }

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supa.auth.signUp({ email, password })
        if (data.user) {
            user.value = data.user
        } else {
            console.error('Error signing up:', error)
        }
        await fetchUser()
    }
  
    const signIn = async (email: string, password: string) => {
      await supa.auth.signInWithPassword({ email, password })
      await fetchUser()
    }
  
    const signOut = async () => {
      await supa.auth.signOut()
      user.value = null
    }
  
    return { user, signUp, signIn, signOut, fetchUser }
  }
  