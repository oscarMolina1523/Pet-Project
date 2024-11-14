interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const loginService = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const result: LoginResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
